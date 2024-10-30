import { db } from '../src/lib/super-heroes-db';

async function main() {
  try {
    await db.seed();
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}
main();
