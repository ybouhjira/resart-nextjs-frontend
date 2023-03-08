import { useGetProductBySku } from "@/app/product/[sku]/data/useGetProductBySku";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/app/shared/Button/Button";
import ProductImage from "@/components/ProductImage/ProductImage";

interface Props {
  params: { sku: string }
}

const ProductDetailsPage = async ({
  params: { sku },
}: Props) => {
  const product = await useGetProductBySku(sku);

  if (!product) notFound();

  return (
    <main className="flex flex-col lg:flex-row w-full flex-wrap gap-[24px] px-5 py-10 lg:py-20 lg:px-10">
      <div className="flex  flex-col lg:flex-row gap-x-10 gap-y-5">
        <figure className="block w-ful pt-[100%] md:pt-0 md:w-[260px] lg:h-[300px] relative shrink-0">
          <ProductImage src={product.variations[0].images[0]} alt={product.name} fill />
        </figure>

        <section>
          <h2 className="text-3xl font-bold mb-5">{product.name}</h2>

          <main className="text-[24px] mb-10">{product.description}</main>

          <div className="flex flex-col lg:flex-row justify-between items-center ">
            <div className="flex gap-x-2.5">
              <strong className="text-3xl text-red-500">
                {product.variations[0].currentPrice}DH
              </strong>
              <strong className="text-3xl line-through">
                {product.variations[0].referencePrice}DH
              </strong>
            </div>
            <Button href="/">Add to cart</Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
