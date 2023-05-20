import MainBanner from "@/app/components/MainBanner/MainBanner";
import AboutSection from "@/app/components/AboutSection/AboutSection";
import TestimonialsSection from "@/app/components/TestimonialsSection/TestimonialsSection";
import { ListObjectsCommand, S3Client } from "@aws-sdk/client-s3";

async function getHomeCarouselImagesFromS3(): Promise<string[]> {
  const s3 = new S3Client({
    region: process.env.AWS_REGION as string,
  });

  const { Contents } = await s3.send(
    new ListObjectsCommand({
      Bucket: process.env.S3_PHOTOS_BUCKET as string,
      Prefix: "home-carousel/",
    })
  );

  return (Contents || [])
    .filter((item) => item.Key?.match(/\.png$/))
    .map((image) => `${process.env.S3_PHOTOS_BUCKET_URL}/${image.Key}`);
}

export default async function HomePage() {
  const images = await getHomeCarouselImagesFromS3();
  return (
    <div>
      <MainBanner images={images} />
      <AboutSection />
      <TestimonialsSection />
    </div>
  );
}
