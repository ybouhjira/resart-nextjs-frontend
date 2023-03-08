import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetProducts } from "@/app/products/useGetProducts";

export default async function Home() {
  const products = await useGetProducts();

  return (
    <main className="flex w-full flex-wrap gap-[24px] py-20 px-10">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </main>
  );
}
