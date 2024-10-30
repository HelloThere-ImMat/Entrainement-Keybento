export type SuperHero = {
	id: number;
	name: string;
	superName: string;
	profession: string;
	age: number;
	canFly: boolean;
  };

  export const data: SuperHero[] = [
	{
	  id: 1,
	  name: "Wade",
	  superName: "Deadpool",
	  profession: "Street fighter",
	  age: 28,
	  canFly: true,
	},
	{
	  id: 2,
	  name: "Bruce",
	  superName: "Hulk",
	  profession: "Doctore",
	  age: 50,
	  canFly: false,
	},
	{
	  id: 3,
	  name: "Steve",
	  superName: "Captain America",
	  profession: "Solder",
	  age: 120,
	  canFly: false,
	},
	{
	  id: 4,
	  name: "Tony",
	  superName: "Iron Man",
	  profession: "Business man",
	  age: 45,
	  canFly: true,
	},
	{
	  id: 5,
	  name: "Peter",
	  superName: "Spider Man",
	  profession: "Student",
	  age: 21,
	  canFly: true,
	},
  ];
