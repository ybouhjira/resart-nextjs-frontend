import { useGetProductBySku } from "@/app/products/[sku]/data/useGetProductBySku";
import { notFound } from "next/navigation";
import Button from "@/app/shared/Button/Button";
import { PrismaClient } from "@prisma/client";
import ProductFigure from "@/app/products/[sku]/components/ProductFigure";
import { Text } from "@/app/components/shared/Text";

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

  return (
    <main className="max-w-screen-max m-auto flex">
      <div className="flex  flex-col lg:flex-row gap-x-10 gap-y-5">
        <ProductFigure src={mainVariation.images[0]} alt={product.name} />

        <section>
          <Text.H2>{product.name}</Text.H2>
          <Text.P>{product.description}</Text.P>

          <div className="flex flex-col lg:flex-row justify-between items-center ">
            <div className="flex gap-x-2.5">
              <Text.Price className="text-3xl">
                {mainVariation.currentPrice}
              </Text.Price>

              <Text.Price reference className="text-3xl">
                {mainVariation.referencePrice}
              </Text.Price>
            </div>
            <div>
              <Button
                className="w-full block"
                href="/"
                style={{
                  filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))",
                  textAlign: "center",
                }}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
