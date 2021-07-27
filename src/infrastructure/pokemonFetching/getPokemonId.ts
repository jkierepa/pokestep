import type { PokemonSpecies, PokemonEgg } from '@types';
import { LAST_POKEMON_ID, EGG_GROUPS_API } from '@constants';

import getRandArrayElem from '@utils/getRandArrayElem';
import getIdFromUrl from '@utils/getIdFromUrl';
import shuffleArray from '@utils/shuffleArray';

import checkPokemonValidity from './checkPokemonValidity';

const getPokemonId = async (): Promise<number> => {
  const eggGroups = await fetch(EGG_GROUPS_API);
  const eggs = await eggGroups.json();

  const selectedType: PokemonEgg = getRandArrayElem(eggs.results);
  const pokemonInType = await fetch(selectedType.url);
  const inTypeJson = await pokemonInType.json();

  const correctGen: PokemonSpecies[] = inTypeJson.pokemon_species.filter(
    (species: PokemonSpecies) => {
      const id = getIdFromUrl(species.url);

      if (id > LAST_POKEMON_ID) return null;
      return species;
    },
  );

  const shuffled = shuffleArray(correctGen);

  let isValid = false;
  let pokemonId = 0;
  while (!isValid && correctGen.length) {
    const selectedPokemon = shuffled.shift();

    if (selectedPokemon) {
      pokemonId = getIdFromUrl(selectedPokemon.url);
      /* eslint-disable-next-line no-await-in-loop */
      isValid = await checkPokemonValidity(pokemonId);
    }
  }

  return pokemonId;
};

export default getPokemonId;
