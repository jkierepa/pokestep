import { PokemonBasic } from '@types';

const fetchPokemon = async (id: number): Promise<PokemonBasic | undefined> => {
  if (!id) return undefined;
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const resp = await fetch(pokemonUrl);
  const pokemonData = await resp.json();
  const pokemonSprites = pokemonData?.sprites?.versions;
  const types = pokemonData?.types.map((elem: unknown) => {
    if (elem?.type?.name) return elem?.type?.name;
    return null;
  });
  const pokemon: PokemonBasic = {
    name: pokemonData.name,
    id,
    types,
    sprites: {
      static: {
        backDefault: pokemonSprites['generation-v']['black-white'].back_default,
        frontDefault:
          pokemonSprites['generation-v']['black-white'].front_default,
      },
      animated: {
        backDefault:
          pokemonSprites['generation-v']['black-white']?.animated.back_default,
        frontDefault:
          pokemonSprites['generation-v']['black-white']?.animated.front_default,
      },
    },
  };

  return pokemon;
};

export default fetchPokemon;
