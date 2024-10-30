import { db } from '@ex07/super-heroes-db';

export const resolvers = {
  Query: {
    superHeroes: () => db.findAll(),
    superHero: (_, { id }) => db.findById(id),
  },
  // Mutation: {
  //   createSuperHero: async (_: any, { input }: { input: CreateSuperHeroInput }) => {
  //     return db.create({
  //       name: input.name,
  //       fullname: input.fullname,
  //       creationDate: new Date(input.creationDate),
  //       publisher: input.publisher,
  //     });
  //   }
  // }
};


