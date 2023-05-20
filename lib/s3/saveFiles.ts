import { createS3Client } from "@/lib/s3/createS3Client";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export function saveFiles(files: FileList | File[], folderKey: string) {
  const s3Client = createS3Client();

  console.log({
    Bucket: process.env.S3_PHOTOS_BUCKET as string,
    Key: folderKey,
  });
  return Promise.all(
    [...files].map(async (file) =>
      s3Client.send(
        new PutObjectCommand({
          Body: Buffer.from(await file.arrayBuffer()),
          Bucket: process.env.S3_PHOTOS_BUCKET as string,
          Key: folderKey,
        })
      )
    )
  );
}
