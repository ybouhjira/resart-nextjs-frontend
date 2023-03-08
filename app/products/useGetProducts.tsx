import Product from "@/types/Product";
import { PrismaClient } from "@prisma/client";

export const useGetProducts = async (): Promise<Product[]> => {
  const prisma = new PrismaClient();
  const products = await getProducts(prisma);
  await prisma.$disconnect();

  return products.map(mapProduct);
};

export const mapProduct = (
  product: Awaited<ReturnType<typeof getProducts>>[number]
): Product => {
  return {
    ...product,
    variations: product.variations.map((variation) => ({
      ...variation,
      images: variation.images.map((image) => image.path),
    })),
  };
};

export const getProducts = async (prisma: PrismaClient) => {
  return prisma.product.findMany({
    include: {
      variations: {
        include: {
          images: true,
        },
      },
    },
  });
};
