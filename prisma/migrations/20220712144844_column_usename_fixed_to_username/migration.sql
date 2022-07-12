/*
  Warnings:

  - You are about to drop the column `usename` on the `credentials` table. All the data in the column will be lost.
  - Added the required column `username` to the `credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "credentials" DROP COLUMN "usename",
ADD COLUMN     "username" TEXT NOT NULL;
