/*
  Warnings:

  - Added the required column `bucket` to the `Bot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastContactedDate` to the `Bot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Bot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sortBy` to the `Bot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textToSend` to the `Bot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bot" ADD COLUMN     "bucket" TEXT NOT NULL,
ADD COLUMN     "lastContactedDate" TEXT NOT NULL,
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "sortBy" TEXT NOT NULL,
ADD COLUMN     "textToSend" INTEGER NOT NULL;
