import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import *  as Express from "express";
import { SuperHeroResolver } from "./SuperHeroes";

async function startServer() {
  const schema = await buildSchema({
    resolvers: [SuperHeroResolver]
  });

  const server = new ApolloServer({ schema });
  await server.start();
  const app = Express();

  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000/graphql");
  });
}

startServer();
