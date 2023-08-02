/*
  Warnings:

  - Added the required column `shipping` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vat` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "shipping" INTEGER NOT NULL,
ADD COLUMN     "vat" INTEGER NOT NULL;
