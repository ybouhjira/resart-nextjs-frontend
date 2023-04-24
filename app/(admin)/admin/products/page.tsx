import { ProductsTable } from "@/app/(admin)/admin/products/productsTable";
import { useGetProducts } from "@/app/(main)/products/useGetProducts";
import { ProductPageActions } from "@/app/(admin)/admin/products/productPageActions";

const AdminProductsPage = async () => {
  const products = await useGetProducts();

  return (
    <div>
      <ProductPageActions />
      <ProductsTable products={products} />
    </div>
  );
};

export default AdminProductsPage;
