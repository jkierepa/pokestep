import { PayloadAction } from '@reduxjs/toolkit';
import { PokemonDetailed, PokemonState } from '@types';
import includesPokemon from '@utils/includesPokemon';

const setPokemonStateAction = (
  state: PokemonState,
  action: PayloadAction<PokemonState>,
): void => {
  state.pokemon = [...action.payload.pokemon];
};

const addPokemonAction = (
  state: PokemonState,
  action: PayloadAction<PokemonDetailed>,
): void => {
  const isIncluded = includesPokemon(action.payload.id, state.pokemon);
  console.log('isIncluded', isIncluded);
  if (!isIncluded) {
    const temp = [...state.pokemon];
    temp.push(action.payload);
    state.pokemon = [...temp];
  }
};

export { addPokemonAction, setPokemonStateAction };
