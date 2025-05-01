-- CreateTable
CREATE TABLE "complaint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_no" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "complaint_text" TEXT NOT NULL,
    "submission_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
