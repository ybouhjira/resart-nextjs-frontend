import products from "@/app/data/products";
import Product from "@/types/Product";

export const useGetProductBySku = (sku: string): Product | undefined => {
  return products.find((product) => product.sku === sku);
};
