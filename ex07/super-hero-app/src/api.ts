const API_URL = 'http://localhost:4000/graphql';

export async function fetchSuperheroes() {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetSuperHeroes {
          superHeroes {
            id
            name
            fullname
            creationDate
            publisher
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  return data.superHeroes;
}

export async function createSuperHero(superhero :FormState) {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation AddSuperHero($superhero: AddSuperHeroInput!) {
          addSuperHero(superhero: $superhero) {
            name
            fullname
            creationDate
            publisher
          }
        }
      `,
      variables: {
        superhero,
      },
    }),
  });
}


export interface Superhero {
  id: string;
  name: string;
  fullname: string;
  creationDate: string;
  publisher: string;
}

export interface FormState {
	name: string;
	fullname: string;
	creationDate: string;
	publisher: string;
}

