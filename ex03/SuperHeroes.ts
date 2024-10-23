import "reflect-metadata";
import { Field, ObjectType, ID, Resolver, Query, Arg } from "type-graphql";
import { superheroes } from "./data";

function matchesField<T>(item: T, field: keyof T, value: any): boolean {
	return value == null || item[field] === value;
}

@ObjectType()
class SuperHero {
	@Field(type => ID)
	id: number;

	@Field({description: "Superhero name"})
	name: string;

	@Field({ nullable: true, description: "secret identity of the Superhero"})
	fullname?: string;

	@Field()
	creationDate: Date;

	@Field()
	publisher:string;
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
		if(!id && !name && !fullname && !publisher) {
			return superheroes;
		}


		return superheroes.filter(hero =>
			matchesField(hero, "id", id) &&
			matchesField(hero, "name", name) &&
     		matchesField(hero, "fullname", fullname) &&
      		matchesField(hero, "publisher", publisher)
		);
	}
	//Query to get a SuperHero by ID
	@Query(returns => SuperHero, { nullable: true })
	async getSuperHeroById(@Arg("id") id: number): Promise<SuperHero | undefined> {
	  return superheroes.find(hero => hero.id === id);
	}
}
