import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { uuid } from "flowbite-react/lib/esm/helpers/uuid";

export async function putProductPhotosInS3(
  photo: File,
  sku: string,
  s3: S3Client
) {
  const extension = photo.type.split("/")[1];
  const id = uuid();
  const key = `${sku}/${id}.${extension}`;
  const command = new PutObjectCommand({
    Body: Buffer.from(await photo.arrayBuffer()),
    Bucket: process.env.S3_PHOTOS_BUCKET as string,
    Key: `product-photos/${key}`,
  });
  await s3.send(command);

  return key;
}
