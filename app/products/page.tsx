import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetProducts } from "@/app/products/useGetProducts";

export default async function Home() {
  const products = await useGetProducts();

  return (
    <main className="flex max-w-[1024px] m-auto gap-5 flex-wrap justify-center md:justify-start">
      {products.map((product) => (
        <ProductCard product={product} key={product.sku} />
      ))}
    </main>
  );
}
