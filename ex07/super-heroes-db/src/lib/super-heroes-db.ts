import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class SuperHeroesDb {
  async findAll() {
    return prisma.superHero.findMany();
  }

  async findById(id: number) {
    return prisma.superHero.findUnique({
      where: { id },
    });
  }

  async create(data: {
    name: string;
    fullname: string;
    creationDate: string;
    publisher: string;
  }) {
    return prisma.superHero.create({
      data,
    });
  }

  async seed() {
    await prisma.superHero.create({
      data: {
        name: "Iron Man",
        fullname: "Tony Stark",
        creationDate: "1961-03-11",
        publisher: "Marvel Comics"
      }
    });
  }
}

export const db = new SuperHeroesDb();
