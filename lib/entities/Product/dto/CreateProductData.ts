import { Product } from "@prisma/client";

export type CreateProductData = Omit<Product, "sku"> & {
  photoFiles: File[];
  photoURLs: string[];
};
