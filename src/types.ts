export type CoordinateState = {
  currLat: number;
  currLon: number;
  prevLat: number;
  prevLon: number;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type DistanceState = {
  currentDistance: number;
  threshold: number;
  pokemonFound: PokemonEgg[];
};

export type PokemonState = {
  pokemon: PokemonBasic[];
};

export type PokemonEgg = {
  eggType: string;
};

export type FetchedPokemonEgg = {
  name: string;
  url: string;
};

export type PokemonSpecies = {
  name: string;
  url: string;
};

export type PokemonSprites = {
  static: {
    backDefault: string;
    frontDefault: string;
  };
  animated: {
    backDefault: string;
    frontDefault: string;
  };
};

export type PokemonBasic = {
  name: string;
  id: number;
  types: PokemonType[];
  sprites: PokemonSprites;
};

export type HamburgerTypes =
  | 'backpack'
  | 'egg'
  | 'home'
  | 'pokeball'
  | 'hamburger';

export type EggTypes =
  | 'eggGreenBig'
  | 'eggBlue'
  | 'eggRed'
  | 'eggGold'
  | 'eggGreen'
  | 'eggOrange';

export type EggTypeSmall = Omit<EggTypes, 'eggGreenBig'>;

export type GenericFunc<T extends unknown[]> = (...args: T[]) => unknown;

export type RgbObject = {
  r: number;
  g: number;
  b: number;
};

export type PokemonType =
  | 'normal'
  | 'fire'
  | 'fighting'
  | 'flying'
  | 'plant'
  | 'grass'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'water'
  | 'fairy'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark';
/*

type Props<T extends unknown[]> = {
  func: someFunction<T>
}

type someFunction<T extends unknown[]> = (...args: T) => unknown

*/
