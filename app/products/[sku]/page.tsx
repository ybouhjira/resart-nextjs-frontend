import { useGetProductBySku } from "@/app/products/[sku]/data/useGetProductBySku";
import { notFound } from "next/navigation";
import Button from "@/app/shared/Button/Button";
import ProductImage from "@/components/ProductImage/ProductImage";
import { useGetProducts } from "@/app/products/useGetProducts";
import { PrismaClient } from "@prisma/client";

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

  return (
    <main className="flex flex-col lg:flex-row w-full flex-wrap gap-[24px] px-5 py-10 lg:py-20 lg:px-10">
      <div className="flex  flex-col lg:flex-row gap-x-10 gap-y-5">
        <figure className="lg:w-full">
          <ProductImage
            src={product.variations[0].images[0]}
            alt={product.name}
            width={560}
            height={560}
            className="w-full"
          />
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
