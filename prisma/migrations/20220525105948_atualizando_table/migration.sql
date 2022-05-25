/*
  Warnings:

  - You are about to drop the column `createde_and` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `createde_and` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `createde_and` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `createde_and` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `createde_and` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "createde_and",
ADD COLUMN     "created_and" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "items" DROP COLUMN "createde_and",
ADD COLUMN     "created_and" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "createde_and",
ADD COLUMN     "created_and" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "products" DROP COLUMN "createde_and",
ADD COLUMN     "created_and" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createde_and",
ADD COLUMN     "created_and" TIMESTAMP(3);
