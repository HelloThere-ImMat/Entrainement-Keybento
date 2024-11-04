import { db } from '@ex07/super-heroes-db';

export const resolvers = {
  Query: {
    superHeroes: () => db.findAll(),
    superHero: (_, { id }) => db.findById(id),
  },
  Mutation: {
    addSuperHero(_, { superhero }) {
      let newSuperhero = {
        name: superhero.name,
        fullname: superhero.fullname,
        creationDate: superhero.creationDate,
        publisher: superhero.publisher
      }
      db.create(newSuperhero);
      return (newSuperhero);
    }
  }
};


