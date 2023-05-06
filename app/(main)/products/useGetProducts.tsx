import { PrismaClient, Product } from "@prisma/client";

export const useGetProducts = async (): Promise<Product[]> => {
  const prisma = new PrismaClient();
  const products = await getProducts(prisma);
  await prisma.$disconnect();

  return products;
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
