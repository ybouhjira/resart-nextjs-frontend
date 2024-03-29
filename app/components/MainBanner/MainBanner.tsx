import Button from "@/app/shared/Button/Button";
import ProductCarousel from "@/app/components/MainBanner/ProductCarousel";

export default function MainBanner({ images }: { images: string[] }) {
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

      <ProductCarousel urls={images} />
    </section>
  );
}
