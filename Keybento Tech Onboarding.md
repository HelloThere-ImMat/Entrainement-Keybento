### **Mathias Dorr: Keybento tech onboarding**

Onboarding by Visoth
Email for access: mathias-dorr@orange.fr

Welcome to this onboarding document. It will guide you through the different tools we use and our engineering practices.

# Technical stack

## Development

Code is managed and versioned in Github, written in Typescript. The continuous integration and Delivery (CI & CD) are managed by Vercel.

## Production

The application uses managed service from supabase for: database, auth and files bucket; And Vercel to serve static application files and run serverless functions.

## Front end development

### React

React is used to build SPA applications. Here some general documentation to get started with the basics:

* General learning doc: [https://react.dev/learn](https://react.dev/learn)
* Rendering components: [https://react.dev/learn/describing-the-ui](https://react.dev/learn/describing-the-ui)
* Managing state: [https://react.dev/learn/managing-state](https://react.dev/learn/managing-state)
* React with typescript: [https://react.dev/learn/typescript](https://react.dev/learn/typescript)

### NextJS

NextJS expands react with a more complete ecosystem, made around folder and files routing, server side rendering, and serverless api and edge functions.

* [https://nextjs.org/docs](https://nextjs.org/docs)
* Routine: [https://nextjs.org/docs/app/building-your-application/routing](https://nextjs.org/docs/app/building-your-application/routing)
* Project structure: [https://nextjs.org/docs/app/building-your-application/routing/colocation](https://nextjs.org/docs/app/building-your-application/routing/colocation)
* Data fetching: [https://nextjs.org/docs/app/building-your-application/data-fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
* Rendering: [https://nextjs.org/docs/app/building-your-application/rendering](https://nextjs.org/docs/app/building-your-application/rendering)

### UI Framework

[shadcn](https://ui.shadcn.com/) is a set of complete UI components we can copy-paste into our codebase.

## Back end development

### Supabase

* As our main database, we use the managed Postgres database service from supabase: [https://supabase.com/database](https://supabase.com/database)
* And the auth service to manage user’s authentication: [https://supabase.com/auth](https://supabase.com/auth)
* And the storage service to manage user’s personal files: [https://supabase.com/storage](https://supabase.com/storage)

### Prisma

To interact with our database, we use Prisma as an ORM to model our data, maintain the database schema and generate the corresponding typescript code to interact with it. On top of it, we use

* Quickstart: [https://www.prisma.io/docs/getting-started/quickstart](https://www.prisma.io/docs/getting-started/quickstart)
* Setup: [https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration)
* Queries: [https://www.prisma.io/docs/orm/prisma-client/queries](https://www.prisma.io/docs/orm/prisma-client/queries)

### GraphQL

* General doc: [https://graphql.org/learn/](https://graphql.org/learn/)
* Server: [https://www.apollographql.com/docs/apollo-server](https://www.apollographql.com/docs/apollo-server)
* Client: [https://www.apollographql.com/docs/react/get-started](https://www.apollographql.com/docs/react/get-started)

### Prisma \- GraphQL

* Prisma requests can be wrapped as a GraphQL server:  [https://www.prisma.io/graphql](https://www.prisma.io/graphql)
* And to go further, the types and CRUDs operations can even be auto generated for us: [https://prisma.typegraphql.com/](https://prisma.typegraphql.com/)

### Hosting our GraphQL server

* As a NextJS API: [https://nextjs.org/docs/pages/building-your-application/routing/api-routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
* And Vercel functions: [https://vercel.com/docs/functions](https://vercel.com/docs/functions)

# Onboarding exercices

## Exercice 1 \- React SPA

Create with [create-react-app](https://create-react-app.dev/), a new react single page application to manage a todo list in memory. The application should allow us to add a task, mark it as completed. As a bonus, we should be able to edit a task label.

## Exercice 2 \- NextJS

Create a [NextJS](https://nextjs.org/docs/getting-started/installation) application to display cats from this [cat API](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t). The page should fetch the API from the server side (see [here](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)), and render the cats images with the [Image](https://nextjs.org/docs/app/api-reference/components/image) component.

## Exercise 3 \- GraphQL server

Create a new graphQL server with [https://typegraphql.com/](https://typegraphql.com/) to expose a set of data as a query with a resolver. The data is a static typescript file you have to create. It can be, for example, a list of superheroes with id, name, full name, publisher (1, Batman, Bruce Wayne, DC Comics). We should be able to query all the superheroes at once, specifying any fields, or by id.

## Exercice 4 \- Prisma

Extend the exercise 3, by replacing the static data file with a real database.

* Setup a local postgres database: [https://medium.com/@jewelski/quickly-set-up-a-local-postgres-database-using-docker-5098052a4726](https://medium.com/@jewelski/quickly-set-up-a-local-postgres-database-using-docker-5098052a4726)
* Create the model with Prisma: [https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql)
* Seed the database from the previous static data file: [https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding\#example-seed-scripts](https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding#example-seed-scripts)
* Connect your resolver to the Prisma client: see example from here [https://www.prisma.io/graphql](https://www.prisma.io/graphql) (select the TypeGraph tab)

## Exercice 5 \- data manipulation in typescript

Create a node js application running with ts-node. Add this dataset:

| const data \= \[     {         "id": 1,         "name": "Wade",         "superName": "Deadpool",         "profession": "Street fighter",         "age": 28,         "canFly": true     },     {         "id": 2,         "name": "Bruce",         "superName": "Hulk",         "profession": "Doctore",         "age": 50,         "canFly": false     },     {         "id": 3,         "name": "Steve",         "superName": "Captain America",         "profession": "Solder",         "age": 120,         "canFly": false     },     {         "id": 4,         "name": "Tony",         "superName": "Iron Man",         "profession": "Business man",         "age": 45,         "canFly": true     },     {         "id": 5,         "name": "Peter",         "superName": "Spider Man",         "profession": "Student",         "age": 21,         "canFly": true     } \] |
| :---- |

Then, from the main file (index.ts), process the data file and log in the console the result for the following transformations:

* Hash map: Create a Map object where the key is the id and the value, the superhero object
* Grouping: Group the superhero by “canFly” property and create this data structure:
  * type GroupName \= “flying” | “non-flying”
  * type Group \= { group: GroupName, list: Array\<SuperHero\> }
  * type Result \= Array\<Group\>
* Transform: Now, create the same group, by only return the full name of each superhero instead of the object
  * type GroupName \= “flying” | “non-flying”
  * type Group \= { group: GroupName, list: string\[\] }
  * type Result \= Array\<Group\>

Exercice 6 \- Monorepo

* Create a monorepo with Nx:  [https://nx.dev/getting-started/installation](https://nx.dev/getting-started/installation)
* Create 4 distinct apps for the first 4 exercices (todo list, cat, super-heroes-api)
* Create a super-heroes=db library and move the database so that anything related to postgres and prisma are encapsulated inside
* Use this library from the super-heroes-api app, it should encapsulate the db and expose GraphQL queries

Exercice 7 \- Super heroes app styled with tailwind

* Create a new react SPA with nx/vite as a fifth app
* Connect you app to the super heroes api and generate the client code with [https://the-guild.dev/graphql/codegen/docs/guides/react-query](https://the-guild.dev/graphql/codegen/docs/guides/react-query)
* Create a page to display the superheroes full list as a table by using the generated client code
* Add tailwind: [https://tailwindcss.com/docs/guides/vite](https://tailwindcss.com/docs/guides/vite)
* Make sure to have a title and a beautiful table, with padding, margin, stripped rows, all managed with tailwind

Team
Everyone can be contacted in Slack

* Visoth: (CTO). Full stack engineering
* Hervé (CEO). Ops, finance
* Ilona (CPO). Product, marketing
* Eve (Ops Associate). Marketing, ops
* Aleksei (UX design). Product design, website design
* Lakshmi (Hands on advisor). Operating policies, like refunds, cancellations, payments.
