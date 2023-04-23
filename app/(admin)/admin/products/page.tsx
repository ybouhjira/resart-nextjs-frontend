import { ProductsTable } from "@/app/(admin)/admin/products/productsTable";
import { useGetProducts } from "@/app/(main)/products/useGetProducts";

export default async function AdminProductsPage() {
  const products = await useGetProducts();

  return <ProductsTable products={products} />;
}
