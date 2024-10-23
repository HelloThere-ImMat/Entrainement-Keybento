import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";
import { SuperHeroResolver } from "./SuperHeroes";

async function startServer() {
  const schema = await buildSchema({
    resolvers: [SuperHeroResolver]
  });

  const server = new ApolloServer({ schema });
  await server.start();
  const app: Application = express();

  server.applyMiddleware({ app: app as any });

  app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000/graphql");
  });
}

startServer();
