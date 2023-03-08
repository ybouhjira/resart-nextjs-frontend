/*
  Warnings:

  - You are about to drop the column `image` on the `Variation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Variation` DROP COLUMN `image`;

-- CreateTable
CREATE TABLE `ProductPhoto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(191) NOT NULL,
    `variationId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductPhoto` ADD CONSTRAINT `ProductPhoto_variationId_fkey` FOREIGN KEY (`variationId`) REFERENCES `Variation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
