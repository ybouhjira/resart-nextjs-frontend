import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { parseBody } from "@/app/api/products/validationSchema";
import { createS3Client } from "@/app/api/createS3Client";
import { putProductPhotosInS3 } from "@/app/api/products/putProductPhotosInS3";

export async function POST(request: NextRequest) {
  try {
    const prisma = new PrismaClient();
    const body = await request.formData();

    const bodyAsObject = Object.fromEntries(body.entries());
    const validated = parseBody(bodyAsObject, body);

    const s3 = createS3Client();

    // put photos in s3 bucket
    const photoKeys = await Promise.all(
      validated.photos.map(async (photo: File) => {
        return await putProductPhotosInS3(photo, validated.sku, s3);
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
    });

    await prisma.$disconnect();
    return NextResponse.json({ message: "Product created" });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
