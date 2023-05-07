import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { colors } from "@/app/data/product";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import * as process from "process";
import { uuid } from "flowbite-react/lib/esm/helpers/uuid";

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

    const s3 = new S3Client({
      region: process.env.AWS_REGION as string,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    });

    // put photos in s3 bucket
    const photoKeys = await Promise.all(
      validated.photos.map(async (photo: File) => {
        const extension = photo.type.split("/")[1];
        const id = uuid();
        const key = `${validated.sku}/${id}.${extension}`;

        const command = new PutObjectCommand({
          Body: Buffer.from(await photo.arrayBuffer()),
          Bucket: process.env.S3_PHOTOS_BUCKET as string,
          Key: `product-photos/${key}`,
        });
        await s3.send(command);
        return key;
      })
    );

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
            images: {
              create: photoKeys.map((path) => ({ path })),
            },
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
