import { PrismaClient, Product } from "@prisma/client";
import { getPhotoURLs } from "@/lib/entities/Product/schema";
import { GetProductPayload } from "@/lib/entities/Product/types";

export async function getAllProductsInDB(): Promise<GetProductPayload[]> {
  const prisma = new PrismaClient();
  const products: Product[] = await prisma.product.findMany();

  return Promise.all(
    products.map(async (product: Product): Promise<GetProductPayload> => {
      let photoURLs: string[] = await getPhotoURLs(product);
      return {
        ...product,
        photoURLs: photoURLs,
      };
    })
  );
}
