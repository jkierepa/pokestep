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
  pokemon: PokemonDetailed[];
};

export type PokemonEgg = {
  eggType: EggType;
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
  sprites?: PokemonSprites;
};

export type PokemonDetailed = {
  currentExp: number;
  thresholdExp: number;
  idAfterLevel: number;
} & PokemonBasic;

export type EggType =
  | 'eggBug'
  | 'eggDark'
  | 'eggDragon'
  | 'eggFairy'
  | 'eggFighting'
  | 'eggFire'
  | 'eggFlying'
  | 'eggElectric'
  | 'eggGhost'
  | 'eggPlant'
  | 'eggGrass'
  | 'eggGround'
  | 'eggNormal'
  | 'eggPoison'
  | 'eggPsychic'
  | 'eggRock'
  | 'eggSteel'
  | 'eggWater'
  | 'eggIce'
  | 'eggCommon'
  | 'eggWhite';

export type HamburgerTypes = 'backpack' | 'home' | 'pokeball' | 'hamburger';

export type EggImage = { [key: string]: unknown };

export type EggTypes =
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
