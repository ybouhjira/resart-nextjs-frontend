import { DeleteObjectCommand } from "@aws-sdk/client-s3";

export function deletePhotosFromS3(photoURLs: string[]): DeleteObjectCommand[] {
  return photoURLs.map((photo) => {
    return new DeleteObjectCommand({
      Bucket: process.env.S3_PHOTOS_BUCKET as string,
      Key: photo,
    });
  });
}
