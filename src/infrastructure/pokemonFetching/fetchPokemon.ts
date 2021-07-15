import { PokemonBasic } from '@types';

const fetchPokemon = async (id: number): Promise<void> => {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const resp = await fetch(pokemonUrl);
  const pokemonData = await resp.json();
  const pokemonSprites = pokemonData?.sprites?.versions;
  const pokemon: PokemonBasic = {
    name: pokemonData.name,
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
  console.log('pokemon', pokemon);
};

export default fetchPokemon;
