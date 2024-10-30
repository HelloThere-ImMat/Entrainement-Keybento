import "reflect-metadata";
import { Field, ObjectType, ID, Resolver, Query, Arg, GraphQLISODateTime } from "type-graphql";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function matchesField<T>(item: T, field: keyof T, value: any): boolean {
	return value == null || item[field] === value;
}

@ObjectType()
class SuperHero {
	@Field(type => ID)
	id!: number;

	@Field({description: "Superhero name"})
	name!: string;

	@Field(type => String, { nullable: true, description: "secret identity of the Superhero"})
	fullname?: string | null;

	@Field(type => GraphQLISODateTime)
	creationDate!: Date;

	@Field()
	publisher!:string;
}

@Resolver(SuperHero)
export class SuperHeroResolver {
	//Query to filter SuperHeroes or get them all
	@Query(returns => [SuperHero])
	async getSuperHeroes(
		@Arg("id", { nullable: true}) id?: number,
		@Arg("name", { nullable: true}) name?: string,
		@Arg("fullname", { nullable: true}) fullname?: string,
		@Arg("publisher", { nullable: true}) publisher?: string
	): Promise<SuperHero[]> {
		// Use Prisma to filter superheroes from the database
		const whereClause: any = {}; // This will hold the dynamic filter criteria

		if (id) whereClause.id = id;
		if (name) whereClause.name = name;
		if (fullname) whereClause.fullname = fullname;
		if (publisher) whereClause.publisher = publisher;

		return await prisma.superHero.findMany({
		where: whereClause,
		});
	}
	// Query to get a SuperHero by ID
	@Query(returns => SuperHero, { nullable: true })
	async getSuperHeroById(@Arg("id") id: number): Promise<SuperHero | null> {
		return await prisma.superHero.findUnique({
		where: { id },
    });
  }
}
