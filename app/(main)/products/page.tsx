import ProductCard from "@/components/ProductCard";
import { getAllProductsInDB } from "@/lib/entities/Product/db/getAllProductsInDB";
import { GetProductPayload } from "@/lib/entities/Product/types";

export default async function Home() {
  const products: GetProductPayload[] = await getAllProductsInDB();

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
