import products from "@/app/data/products";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main className="flex w-full flex-wrap gap-[24px] py-20 px-10">
      {products.map((product) => (
        <ProductCard key={product.sku} {...product} />
      ))}
    </main>
  );
}
