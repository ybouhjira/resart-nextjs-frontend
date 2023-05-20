import { PrismaClient } from "@prisma/client";
import { GetProductPayload } from "@/lib/entities/Product/types";
import { getPhotoURLs } from "@/lib/entities/Product/schema";

export default async function getProductFromDBBySKU(
  sku: string
): Promise<GetProductPayload> {
  const prisma = new PrismaClient();
  const product = await prisma.product.findUniqueOrThrow({
    where: {
      sku,
    },
  });
  let photoURLs: string[] = await getPhotoURLs(product);

  return {
    ...product,
    photoURLs: photoURLs,
  };
}
