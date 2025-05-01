/*
  Warnings:

  - You are about to drop the `academic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `complaint` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - Made the column `department` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `first_name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_no` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "academic";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "complaint";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Academic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "id_no" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "problem_description" TEXT NOT NULL,
    "submission_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Complaint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subject" TEXT NOT NULL,
    "complaint_text" TEXT NOT NULL,
    "submission_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "department" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Complaint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "id_no" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("department", "first_name", "id", "id_no", "last_name", "password", "username") SELECT "department", "first_name", "id", "id_no", "last_name", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_no_key" ON "User"("id_no");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
