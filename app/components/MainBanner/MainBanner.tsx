import Button from "@/app/shared/Button/Button";
import ProductCarousel from "@/app/components/MainBanner/ProductCarousel";
import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";
import process from "process";

export default async function MainBanner({
  filePaths,
}: {
  filePaths: string[];
}) {
  const s3 = new S3Client({ region: process.env.AWS_REGION });

  const { Contents } = await s3.send(
    new ListObjectsV2Command({
      Bucket: `${process.env.S3_PHOTOS_BUCKET}`,
      Prefix: "home-carousel",
    })
  );

  return (
    <section className="py-2xl">
      <article className="text-center">
        <h1 className="text-5xl font-semibold">Resart</h1>
        <p className="lg:max-w-[60vw] lg:mx-auto my-5 mx-5 md:my-10">
          Discover Resart - our exquisite collection of handcrafted thuya wood
          and epoxy necklaces. Each necklace is made with care and attention to
          detail, resulting in a unique and one-of-a-kind piece of jewelry. Our
          stunning designs combine the intricate patterns of thuya wood with
          high-quality epoxy resin, creating a truly breathtaking accessory.
          Shop now to find your perfect statement piece or a thoughtful gift for
          someone special.
        </p>
      </article>
      <nav className="flex justify-center pb-5 md:pb-10 pt-0">
        <Button href="/products" className="m-auto inline-block">
          Browse our products
        </Button>
      </nav>

      <ProductCarousel
        urls={(Contents || [])
          .filter((item) => item.Key?.match(/\.png$/))
          .map((image) => `${process.env.PHOTOS_BUCKET}/${image.Key}`)}
      />
    </section>
  );
}
