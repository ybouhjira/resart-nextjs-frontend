import ProductForm from "@/app/(admin)/admin/products/ProductForm";
import getProductFromDBBySKU from "@/lib/entities/Product/db/getProductFromDB";

interface Props {
  params: {
    sku: string;
  };
}

export default async function EditProductPage({ params: { sku } }: Props) {
  const product = await getProductFromDBBySKU(sku);
  return <ProductForm pageTitle={`Change product ${sku}`} product={product} />;
}
