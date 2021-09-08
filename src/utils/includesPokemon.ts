import { PokemonDetailed } from '@types';

const includesPokemon = (
  targetId: number,
  array: PokemonDetailed[],
): boolean => {
  const filtered = array.filter((pokemon: PokemonDetailed) => {
    if (pokemon.id === targetId) {
      return pokemon;
    }
    return null;
  });

  if (filtered.length !== 0) return true;
  return false;
};

export default includesPokemon;
