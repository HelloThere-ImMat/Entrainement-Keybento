-- CreateTable
CREATE TABLE "SuperHero" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "creationDate" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,

    CONSTRAINT "SuperHero_pkey" PRIMARY KEY ("id")
);
