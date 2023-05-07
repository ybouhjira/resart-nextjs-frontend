import { PrismaClient } from "@prisma/client";
import Product from "@/types/Product";

export const useGetProductBySku = async (sku: string): Promise<any> => {
  const prisma = new PrismaClient();

  return prisma.product.findUniqueOrThrow({
    where: {
      sku,
    },
    include: {
      variations: {
        include: {
          images: true,
        },
      },
    },
  });
};
