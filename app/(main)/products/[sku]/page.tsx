import { useGetProductBySku } from "@/app/(main)/products/[sku]/data/useGetProductBySku";
import { notFound } from "next/navigation";
import { WhatsappButton } from "@/components/whatsappButton";
import Image from "next/image";
import { getMainPhoto } from "@/utils/data/product";

interface Props {
  params: { sku: string };
}

const ProductDetailsPage = async ({ params: { sku } }: Props) => {
  const product = await useGetProductBySku(sku);

  if (!product) notFound();

  const mainVariation = product.variations[0];

  const phoneNumber = "2121234343";
  return (
    <main className="max-w-screen-max m-auto flex">
      <div className="flex flex-col md:flex-row gap-5">
        <figure className="lg:w-full rounded overflow-hidden md:basis-1/2">
          <Image
            data-testid="product-image"
            src={getMainPhoto(product) as string}
            alt={product.name}
            width={675}
            height={675}
            className="h-full w-auto block object-cover"
          />
        </figure>
        <section className="flex flex-col gap-5 md:basis-1/2">
          <h2 className="heading" data-testid="product-name">
            {product.name}
          </h2>
          <article data-testid="product-description">
            {product.description}
          </article>

          <div className="flex flex-col gap-5 lg:flex-row justify-between items-center">
            <div className="flex gap-5 items-center">
              <span
                className="text-3xl text-dark font-bold"
                data-testid="product-current-price"
              >
                {mainVariation.currentPrice} DH
              </span>

              <span className="text-2xl" data-testid="product-reference-price">
                {mainVariation.referencePrice} DH
              </span>
            </div>
            <div className="self-stretch">
              <WhatsappButton
                data-testid="whatsapp-button"
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
