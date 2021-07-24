import { PokemonBasic } from '@types';

const includesPokemon = (targetId: number, array: PokemonBasic[]): boolean => {
  const filtered = array.filter((pokemon: PokemonBasic) => {
    if (pokemon.id === targetId) return pokemon;
    return null;
  });

  if (filtered.length !== 0) return false;
  return true;
};

export default includesPokemon;
