import ProductForm from "@/app/(admin)/admin/products/ProductForm";
import { useGetProductBySku } from "@/data/product/useGetProductBySku";

interface Props {
  params: {
    sku: string;
  };
}

export default async function EditProductPage({ params: { sku } }: Props) {
  const product = await useGetProductBySku(sku);
  return <ProductForm pageTitle={`Change product ${sku}`} product={product} />;
}
