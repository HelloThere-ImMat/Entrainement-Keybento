export * from './lib/super-heroes-db';

// libs/super-heroes-db/src/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.superHero.createMany({
    data: [
      { name: 'Wade', superName: 'Deadpool', profession: 'Street fighter', age: 28, canFly: true },
      { name: 'Bruce', superName: 'Hulk', profession: 'Doctor', age: 50, canFly: false },
      { name: 'Steve', superName: 'Captain America', profession: 'Soldier', age: 120, canFly: false },
      { name: 'Tony', superName: 'Iron Man', profession: 'Businessman', age: 45, canFly: true },
      { name: 'Peter', superName: 'Spider-Man', profession: 'Student', age: 21, canFly: true },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
