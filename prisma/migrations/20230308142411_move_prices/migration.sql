/*
  Warnings:

  - You are about to drop the column `currentPrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `referencePrice` on the `Product` table. All the data in the column will be lost.
  - Added the required column `currentPrice` to the `Variation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referencePrice` to the `Variation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `currentPrice`,
    DROP COLUMN `referencePrice`;

-- AlterTable
ALTER TABLE `Variation` ADD COLUMN `currentPrice` DOUBLE NOT NULL,
    ADD COLUMN `referencePrice` DOUBLE NOT NULL;
