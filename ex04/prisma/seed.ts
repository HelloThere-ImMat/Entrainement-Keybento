import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const superheroes = [
    {
		name: 'Batman',
		fullname: 'Bruce Wayne',
		creationDate: new Date('1939-05-01'),
		publisher: 'DC Comics',
    },
	{
		name: "Superman",
		fullname: "Clark Kent",
		creationDate: new Date("1938-06-01"),
		publisher: "DC Comics"
	},
    {
		name: 'Spider-Man',
		fullname: 'Peter Parker',
		creationDate: new Date('1962-08-01'),
		publisher: 'Marvel Comics',
    },
  ];

  for (const hero of superheroes) {
    await prisma.superHero.create({
      data: hero,
    });
  }

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
