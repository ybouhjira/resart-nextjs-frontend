import Variation from "@/lib/types/Variation";

interface Product {
  name: string;
  price: {
    referencePrice: 10;
    currentPrice: 8;
  };
  variations: Variation[];
  path: string;
}

export default Product;
