import { PrismaClient } from '@prisma/client'
import products from "../app/data/products";


const prisma = new PrismaClient()

async function main() {

    const createQueries = products.map(async product => {
        return prisma.product.create({
            data: {
                sku: product.sku,
                name: product.name,
                currentPrice: product.price.currentPrice,
                referencePrice: product.price.referencePrice,
                description: product.description,
                variations: {
                    create: {
                        color: 'red',
                        image: product.path,
                    }
                }

            }
        })
    })

    await Promise.all(createQueries)

    await prisma.$disconnect()
}

main().catch((error) => {
    console.error(error)
})

