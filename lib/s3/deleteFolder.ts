import { createS3Client } from "@/lib/s3/createS3Client";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

export async function deleteFolder(folderKey: string) {
  const s3Client = createS3Client();
  return s3Client.send(
    new DeleteObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_PHOTOS_BUCKET,
      Key: folderKey,
    })
  );
}
