-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN "department" TEXT;
ALTER TABLE "User" ADD COLUMN "first_name" TEXT;
ALTER TABLE "User" ADD COLUMN "id_no" TEXT;
ALTER TABLE "User" ADD COLUMN "last_name" TEXT;
