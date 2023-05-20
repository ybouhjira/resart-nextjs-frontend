import { Product } from "@prisma/client";

export type ProductWithPhotoURLs = Product & { photoURLs: string[] };

type ProductFormData = Omit<Product, "sku" | "createdAt" | "updateAt">;
export type PhotoURLs = { photoURLs: string[] };
export type PhotoFiles = { photoFiles: File[] };

export type GetProductPayload = Product & PhotoURLs;
export type PostProductPayload = ProductFormData & PhotoFiles;
export type PutProductPayload = Product & PhotoFiles & PhotoURLs;
