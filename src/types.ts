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
  pokemonFound: number;
};

export type PokemonState = {
  pokemon: PokemonBasic[];
};

export type PokemonEgg = {
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

export type GenericFunc<T extends unknown[]> = (...args: T[]) => unknown;

/*

type Props<T extends unknown[]> = {
  func: someFunction<T>
}

type someFunction<T extends unknown[]> = (...args: T) => unknown

*/
