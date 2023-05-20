import { PrismaClient } from "@prisma/client";
import { validateProduct } from "@/lib/entities/Product/validation";
import { getProductPhotoFolderKey } from "@/lib/entities/Product/schema";
import { saveFiles } from "@/lib/s3/saveFiles";
import { deleteFolder } from "@/lib/s3/deleteFolder";

export async function saveProductToDB(
  formData: FormData,
  prisma: PrismaClient
) {
  const validated = validateProduct(formData);
  const photosFolder = getProductPhotoFolderKey(validated.sku);
  const $saveFiles = saveFiles(validated.photoFiles, photosFolder).catch(
    (e) => {
      console.error("Error saving files ", validated.sku);
      console.error(e);
      return deleteFolder(photosFolder);
    }
  );

  const $createProduct = prisma.product
    .create({
      data: {
        sku: validated.sku,
        name: validated.name,
        description: validated.description,
        referencePrice: validated.referencePrice,
        currentPrice: validated.currentPrice,
        stock: validated.stock,
      },
    })
    .catch((e) => {
      console.error("Error saving product ", validated.sku);
      console.error(e);
      return deleteFolder(photosFolder);
    });

  return Promise.all([$saveFiles, $createProduct]);
}
