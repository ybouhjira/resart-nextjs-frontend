import { useGetProductBySku } from "@/app/(main)/products/[sku]/data/useGetProductBySku";
import { notFound } from "next/navigation";
import Button from "@/app/shared/Button/Button";
import { PrismaClient } from "@prisma/client";
import Text from "@/components/Text/Text";
import ProductImage from "@/components/ProductImage/ProductImage";
import { WhatsappButton } from "@/components/whatsappButton";

interface Props {
  params: { sku: string };
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany({
    select: { sku: true },
  });

  return {
    paths: products.map((p) => ({ params: { sku: p.sku } })),
    fallback: false,
  };
}

const ProductDetailsPage = async ({ params: { sku } }: Props) => {
  const product = await useGetProductBySku(sku);

  if (!product) notFound();

  const mainVariation = product.variations[0];

  const phoneNumber = "212651123324";
  return (
    <main className="max-w-screen-max m-auto flex">
      <div className="flex flex-col md:flex-row gap-5">
        <figure className="lg:w-full rounded overflow-hidden md:basis-1/2">
          <ProductImage
            src={`product-photos/${mainVariation.images[0]}`}
            alt={product.name}
            width={675}
            height={675}
            className="h-full w-auto block object-cover"
          />
        </figure>
        <section className="flex flex-col gap-5 md:basis-1/2">
          <Text.H>{product.name}</Text.H>
          <Text.P>{product.description}</Text.P>

          <div className="flex flex-col gap-5 lg:flex-row justify-between items-center">
            <div className="flex gap-5 items-center">
              <Text.Price variant="main" className="text-3xl">
                {mainVariation.currentPrice}
              </Text.Price>

              <Text.Price variant="ref" className="text-2xl">
                {mainVariation.referencePrice}
              </Text.Price>
            </div>
            <div className="self-stretch">
              <Button className="block" href="/">
                Add to cart
              </Button>
            </div>
            <div className="self-stretch">
              <WhatsappButton
                phoneNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER as string}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
