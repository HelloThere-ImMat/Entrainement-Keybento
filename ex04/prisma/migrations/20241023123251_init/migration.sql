-- CreateTable
CREATE TABLE "SuperHero" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fullname" TEXT,
    "creationDate" TIMESTAMP(3) NOT NULL,
    "publisher" TEXT NOT NULL,

    CONSTRAINT "SuperHero_pkey" PRIMARY KEY ("id")
);
