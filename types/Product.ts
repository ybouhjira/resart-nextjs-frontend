import Variation from "@/types/Variation";

interface Product {
  sku: string;
  name: string;
  variations: Variation[];
  description: string;
  currentPrice: number;
  referencePrice: number;
}

export default Product;
