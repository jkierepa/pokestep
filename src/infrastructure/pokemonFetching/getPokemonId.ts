import eggs from '@data/pokemonEggTypes.json';

import type { PokemonSpecies } from '@types';
import { LAST_POKEMON_ID } from '@constants';

import getRandArrayElem from '@utils/getRandArrayElem';
import getIdFromUrl from '@utils/getIdFromUrl';

const getPokemonId = async (): Promise<number> => {
  const types = eggs.results;
  const selectedType = getRandArrayElem(types);
  const pokemonInType = await fetch(selectedType.url);
  const inTypeJson = await pokemonInType.json();

  const correctGen = inTypeJson.pokemon_species.filter(
    (species: PokemonSpecies) => {
      const id = getIdFromUrl(species.url);
      if (id <= LAST_POKEMON_ID) {
        return species;
      }
      return null;
    },
  );

  const selectedPokemon: PokemonSpecies = getRandArrayElem(correctGen);
  const pokemonId = getIdFromUrl(selectedPokemon.url);
  return pokemonId;
};

export default getPokemonId;
