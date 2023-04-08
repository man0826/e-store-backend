/*
  Warnings:

  - The values [NONE] on the enum `ProductColor` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProductColor_new" AS ENUM ('BLACK', 'WHITE', 'GRAY', 'RED', 'NAVY', 'AQUA', 'GREEN', 'YELLOW', 'BLUE', 'SKYBLUE', 'BROWN', 'OLIVE', 'SILVER', 'PURPLE', 'ORANGE', 'PINK', 'BEIGE', 'GREENYELLOW', 'BURLYWOOD');
ALTER TABLE "CartItem" ALTER COLUMN "color" DROP DEFAULT;
ALTER TABLE "Product" ALTER COLUMN "colors" TYPE "ProductColor_new"[] USING ("colors"::text::"ProductColor_new"[]);
ALTER TABLE "CartItem" ALTER COLUMN "color" TYPE "ProductColor_new" USING ("color"::text::"ProductColor_new");
ALTER TYPE "ProductColor" RENAME TO "ProductColor_old";
ALTER TYPE "ProductColor_new" RENAME TO "ProductColor";
DROP TYPE "ProductColor_old";
COMMIT;

-- AlterTable
ALTER TABLE "CartItem" ALTER COLUMN "size" DROP DEFAULT,
ALTER COLUMN "color" DROP DEFAULT;
