import CreateProductForm from "@/app/(admin)/admin/products/create/CreateProductForm";
import { useGetProductBySku } from "@/app/(main)/products/[sku]/data/useGetProductBySku";

interface Props {
  params: {
    sku: string;
  };
}

export default async function EditProductPage({ params: { sku } }: Props) {
  const product = await useGetProductBySku(sku);
  return (
    <CreateProductForm pageTitle={`Change product ${sku}`} product={product} />
  );
}
