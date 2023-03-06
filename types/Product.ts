import Variation from "@/types/Variation";

interface Product {
  sku: string;
  name: string;
  price: {
    referencePrice: number;
    currentPrice: number;
  };
  variations: Variation[];
  path: string;
  description: string;
}

export default Product;
