import { PrismaClient } from "@prisma/client";
import products from "../app/data/products";

const prisma = new PrismaClient();

async function main() {
  prisma.product.deleteMany();
  const createQueries = products.map(async (product) => {
    return prisma.product.create({
      data: {
        sku: product.sku,
        name: product.name,
        description: product.description,
        variations: {
          create: {
            stock: 100,
            referencePrice: product.variations[0].referencePrice,
            currentPrice: product.variations[0].currentPrice,
            color: "red",
            images: {
              create: {
                path: product.variations[0].images[0],
              },
            },
          },
        },
      },
    });
  });

  await Promise.all(createQueries);

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error(error);
});
