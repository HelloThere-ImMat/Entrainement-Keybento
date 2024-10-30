import { data, SuperHero } from './data';

type GroupName = 'flying' | 'non-flying';

type Group<T> = {
  group: GroupName;
  list: T[];
};

type Result<T> = Array<Group<T>>;

// 1. Hash map transformation
const hashMap: Map<number, SuperHero> = new Map();
data.forEach((hero) => hashMap.set(hero.id, hero));

console.log('Hash Map:', hashMap);

// 2. Group by 'canFly' property
const groupByCanFly = (heroes: SuperHero[]): Result<SuperHero> => {
  const flyingGroup: SuperHero[] = heroes.filter((hero) => hero.canFly);
  const nonFlyingGroup: SuperHero[] = heroes.filter((hero) => !hero.canFly);

  return [
    { group: 'flying', list: flyingGroup },
    { group: 'non-flying', list: nonFlyingGroup }
  ];
};

const groupedHeroes = groupByCanFly(data);
console.log('Grouped Heroes:', groupedHeroes);

// 3. Group by 'canFly', but return full names
const groupByCanFlyWithNames = (heroes: SuperHero[]): Result<string> => {
  const flyingNames: string[] = heroes
    .filter((hero) => hero.canFly)
    .map((hero) => `${hero.name} (${hero.superName})`);

  const nonFlyingNames: string[] = heroes
    .filter((hero) => !hero.canFly)
    .map((hero) => `${hero.name} (${hero.superName})`);

  return [
    { group: 'flying', list: flyingNames },
    { group: 'non-flying', list: nonFlyingNames },
  ];
};

const groupedNames = groupByCanFlyWithNames(data);
console.log('Grouped Hero Names:', groupedNames);
