import { gql } from 'apollo-server';

export const typeDefs = gql`
  type SuperHero {
    id: Int!
    name: String!
    fullname: String!
    creationDate: String!
    publisher: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    superHeroes: [SuperHero!]!
    superHero(id: Int!): SuperHero
  }

`;
