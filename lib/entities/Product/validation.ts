import { z } from "zod";
import ProductFormField from "@/app/data/product";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const ProductSchema = z.object({
  sku: z.string(),
  name: z.string(),
  description: z.string(),
  referencePrice: z.number(),
  currentPrice: z.number(),
  stock: z.number(),
  photoFiles: z.array(
    z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      )
  ),
  photoURLs: z.array(z.string()).optional(),
});

export type TCreateProduct = z.infer<typeof ProductSchema>;

export function validateProduct(productFormData: FormData) {
  const bodyAsObject = Object.fromEntries(productFormData.entries());

  return ProductSchema.parse({
    ...bodyAsObject,
    [ProductFormField.photoFiles]: productFormData.getAll(
      ProductFormField.photoFiles
    ),
    [ProductFormField.photoURLs]: productFormData.getAll(
      ProductFormField.photoURLs
    ),
    referencePrice: Number(bodyAsObject.referencePrice),
    currentPrice: Number(bodyAsObject.currentPrice),
    stock: Number(bodyAsObject.stock),
  });
}
