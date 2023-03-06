import products from "@/app/data/products";
import ProductCard from "@/components/ProductCard/ProductCard";

import { PrismaClient } from '@prisma/client'


const useGetProducts = async () => {
  const prisma = new PrismaClient()
  let data = await prisma.product.findMany();
  await prisma.$disconnect()

  return data;
};

export default async function Home() {
  const products = await useGetProducts();

  return (
      <main className="flex w-full flex-wrap gap-[24px] py-20 px-10">
        {products.map((product) => (
            <ProductCard
                key={product.sku}
                name={product.name}
                path={''}
                description={product.description}
                sku={product.sku}
                price={{
                  currentPrice: product.currentPrice,
                  referencePrice: product.referencePrice,
                }}
                variations={[]}
            />
        ))}
      </main>
  );
}


