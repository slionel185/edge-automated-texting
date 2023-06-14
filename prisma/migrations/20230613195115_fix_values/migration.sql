/*
  Warnings:

  - Changed the type of `lastContactedDate` on the `Bot` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Bot" DROP COLUMN "lastContactedDate",
ADD COLUMN     "lastContactedDate" INTEGER NOT NULL;
