import Variation from "@/types/Variation";

interface Product {
  sku: string;
  name: string;
  variations: Variation[];
  description: string;
}

export default Product;
