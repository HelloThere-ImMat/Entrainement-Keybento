import { gql } from 'apollo-server';

export const typeDefs = gql`
  type SuperHero {
    id: Int!
    name: String!
    fullname: String!
    creationDate: String!
    publisher: String!
  }

  type Query {
    superHeroes: [SuperHero!]!
    superHero(id: Int!): SuperHero
  }

  type Mutation {
    addSuperHero(superhero: AddSuperHeroInput!) : SuperHero
  }
  input AddSuperHeroInput {
    name: String!
    fullname: String!
    creationDate: String!
    publisher: String!
  }

  `;

