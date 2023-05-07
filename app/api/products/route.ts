import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { colors } from "@/app/data/product";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const productSchema = z.object({
  sku: z.string(),
  name: z.string(),
  description: z.string(),
  referencePrice: z.number(),
  currentPrice: z.number(),
  color: z.enum(colors),
  stock: z.number(),
  // array of files
  photos: z.array(
    z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      )
  ),
});

export async function POST(request: NextRequest) {
  try {
    const prisma = new PrismaClient();
    const body = await request.formData();

    const bodyAsObject = Object.fromEntries(body.entries());
    const validated = productSchema.parse({
      ...bodyAsObject,
      photos: body.getAll("photos"),
      referencePrice: Number(bodyAsObject.referencePrice),
      currentPrice: Number(bodyAsObject.currentPrice),
      stock: Number(bodyAsObject.stock),
    });

    await prisma.product.create({
      data: {
        sku: validated.sku,
        name: validated.name,
        description: validated.description,
        variations: {
          create: {
            stock: validated.stock,
            referencePrice: validated.referencePrice,
            currentPrice: validated.currentPrice,
            color: validated.color,
          },
        },
      },
    } as any);

    await prisma.$disconnect();
    return NextResponse.json({ message: "Product created" });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
