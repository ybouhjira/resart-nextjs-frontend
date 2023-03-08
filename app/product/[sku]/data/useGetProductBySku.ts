import {PrismaClient} from "@prisma/client";
import Product from "@/types/Product";
import {mapProduct} from "@/app/products/useGetProducts";

"server-only";

export const useGetProductBySku = async (sku: string): Promise<Product>  => {
  const prisma = new PrismaClient()


  return mapProduct(await prisma.product.findUniqueOrThrow({
    where: {
      sku
    },
    include: {
      variations: {
        include: {
          images: true,
        }
      }
    }
  }))
};
