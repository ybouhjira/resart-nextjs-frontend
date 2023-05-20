import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createS3Client } from "@/lib/s3/createS3Client";
import { getPhotosNotInS3 } from "@/app/api/utils/getPhotosNotInS3";
import { deletePhotosFromS3 } from "@/app/api/utils/deletePhotosFromS3";
import ProductFormField from "@/app/data/product";
import { putProductPhotosInS3 } from "@/app/api/utils/putProductPhotosInS3";

import { validateProduct } from "@/lib/entities/Product/validation";

export async function PUT(request: NextRequest) {
  try {
    const prisma = new PrismaClient();
    const body = await request.formData();

    const validated = validateProduct(body);
    const photoURLs = validated[ProductFormField.photoURLs] || [];

    const s3Client = createS3Client();
    const photosNotInS3 = await getPhotosNotInS3(
      s3Client,
      validated.sku,
      photoURLs
    );
    const deletePhotos = deletePhotosFromS3(photosNotInS3);

    const newUploadedPhotos = validated.photoFiles;
    await Promise.all([
      ...deletePhotos.map((c) => s3Client.send(c)),
      ...newUploadedPhotos.map((photo) =>
        putProductPhotosInS3(photo, validated.sku, s3Client)
      ),
      prisma.product.update({
        where: {
          sku: validated.sku,
        },
        data: {
          name: validated.name,
          description: validated.description,
        },
      }),
    ]);

    prisma.$disconnect();

    return NextResponse.json({ message: "Product updated" });
  } catch (error) {
    console.error(error);
    return new Response(null, { status: 500 });
  }
}
