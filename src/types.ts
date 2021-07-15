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
  sprites: PokemonSprites;
};
