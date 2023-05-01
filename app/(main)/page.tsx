import MainBanner from "@/app/components/MainBanner/MainBanner";
import AboutSection from "@/app/components/AboutSection/AboutSection";
import TestimonialsSection from "@/app/components/TestimonialsSection/TestimonialsSection";
import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";
import process from "process";

async function getHomeCarouselImagesFromS3(): Promise<string[]> {
  console.log("AWS_REGION", process.env.AWS_REGION);
  const s3 = new S3Client({ region: process.env.AWS_REGION });

  const { Contents } = await s3.send(
    new ListObjectsV2Command({
      Bucket: `${process.env.S3_PHOTOS_BUCKET}`,
      Prefix: "home-carousel",
    })
  );

  return (Contents || [])
    .filter((item) => item.Key?.match(/\.png$/))
    .map((image) => `${process.env.PHOTOS_BUCKET}/${image.Key}`);
}

export default async function HomePage() {
  const images: string[] = await getHomeCarouselImagesFromS3();
  return (
    <div>
      <MainBanner images={images} />
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
}
