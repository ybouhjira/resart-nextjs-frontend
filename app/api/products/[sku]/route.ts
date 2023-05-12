import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import {
  DeleteObjectCommand,
  ListObjectsCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { parseBody } from "@/app/api/products/validationSchema";

export async function PUT(request: NextRequest) {
  try {
    const prisma = new PrismaClient();
    const body = await request.formData();
    const bodyAsObject = Object.fromEntries(body.entries());
    const validated = parseBody(bodyAsObject, body);

    await prisma.product.update({
      where: {
        sku: validated.sku,
      },
      data: {
        name: validated.name,
        description: validated.description,
      },
    });

    prisma.$disconnect();
  } catch (error) {
    console.log(error);
    return new Response(null, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  query: { params: { sku: string } }
) {
  try {
    console.log(`Deleting product ${query.params.sku}`);
    const s3 = new S3Client({
      region: process.env.AWS_REGION as string,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    });

    // check if files exist on s3
    const { Contents } = await s3.send(
      new ListObjectsCommand({
        Bucket: process.env.S3_PHOTOS_BUCKET as string,
        Prefix: `product-photos/${query.params.sku}`,
      })
    );
    if ((Contents?.length || 0) > 0) {
      await s3.send(
        new DeleteObjectCommand({
          Bucket: process.env.S3_PHOTOS_BUCKET as string,
          Key: `product-photos/${query.params.sku}`,
        })
      );
    }

    const prisma = new PrismaClient();
    await prisma.product.delete({
      where: {
        sku: query.params.sku,
      },
      include: {
        variations: {
          include: {
            images: true,
          },
        },
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
