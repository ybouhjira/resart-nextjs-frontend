import { ListObjectsCommand, S3Client } from "@aws-sdk/client-s3";

export async function getProductPhotosOnS3(
  s3Client: S3Client,
  sku: string
): Promise<any[]> {
  const listObjectsCommand = new ListObjectsCommand({
    Bucket: process.env.S3_PHOTOS_BUCKET as string,
    Prefix: `product-photos/${sku}`,
  });

  const { Contents } = await s3Client.send(listObjectsCommand);
  return Contents || [];
}
