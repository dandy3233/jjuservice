/*
  Warnings:

  - Added the required column `id_no` to the `Complaint` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Complaint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subject" TEXT NOT NULL,
    "id_no" TEXT NOT NULL,
    "complaint_text" TEXT NOT NULL,
    "submission_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "department" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Complaint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Complaint" ("complaint_text", "department", "id", "subject", "submission_date", "userId") SELECT "complaint_text", "department", "id", "subject", "submission_date", "userId" FROM "Complaint";
DROP TABLE "Complaint";
ALTER TABLE "new_Complaint" RENAME TO "Complaint";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
