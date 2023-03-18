import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetProducts } from "@/app/products/useGetProducts";

export default async function Home() {
  const products = await useGetProducts();

  return (
    <main className="max-w-screen-max mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-sm md:gap-md">
      {products.map((product) => (
          <div className="" key={product.sku}>
            <ProductCard product={product} />
          </div>
      ))}
    </main>
  );
}
