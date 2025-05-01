/*
  Warnings:

  - You are about to drop the `AReport` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AReport";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Report";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Dormitory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "block_no" TEXT NOT NULL,
    "dorm_no" TEXT NOT NULL,
    "problem_type" TEXT NOT NULL,
    "problem_description" TEXT NOT NULL,
    "submission_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "academic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "id_no" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "problem_description" TEXT NOT NULL,
    "submission_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
