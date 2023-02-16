import Variation from "@/types/Variation";

interface Product {
  sku: string;
  name: string;
  price: {
    referencePrice: 10;
    currentPrice: 8;
  };
  variations: Variation[];
  path: string;
}

export default Product;
