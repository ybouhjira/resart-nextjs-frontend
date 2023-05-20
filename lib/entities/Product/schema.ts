import { Product } from "@prisma/client";
import { createS3Client } from "@/lib/s3/createS3Client";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import * as process from "process";
import { GetProductPayload } from "@/lib/entities/Product/types";

export function getMainPhoto(product: GetProductPayload) {
  return product.photoURLs[0];
}

export async function getPhotoURLs(product: Product) {
  const s3Client = createS3Client();

  const { Contents } = await s3Client.send(
    new ListObjectsV2Command({
      Bucket: process.env.S3_PHOTOS_BUCKET as string,
      Prefix: `product-photos/${product.sku}`,
    })
  );

  return (Contents || []).map((content) => {
    return `${process.env.NEXT_PUBLIC_PHOTOS_BUCKET}/${content.Key}`;
  });
}

export function getReferencePrice(product: Product): number {
  return product.referencePrice;
}

export function getCurrentPrice(product: Product): number {
  return product.currentPrice;
}

export function getStock(product: Product): number {
  return product.stock;
}

export function getVariationPhotos(sku: string, variationId: number) {
  return `${process.env.NEXT_PUBLIC_PHOTOS_BUCKET}/product-photos/${sku}/${variationId}`;
}

export function getProductPhotoFolderKey(sku: string) {
  return `${process.env.S3_PRODUCT_PHOTOS_FOLDER}/${sku}`;
}
