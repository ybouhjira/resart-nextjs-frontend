import { S3Client } from "@aws-sdk/client-s3";
import { getProductPhotosOnS3 } from "@/app/api/utils/getProductPhotosOnS3";

export async function getPhotosNotInS3(
  s3Client: S3Client,
  sku: string,
  photoURLs: string[]
): Promise<string[]> {
  const photosOnS3 = await getProductPhotosOnS3(s3Client, sku);
  return photoURLs.filter((photo) => {
    return !photosOnS3.some((photoOnS3) => photoOnS3.Key === photo);
  });
}