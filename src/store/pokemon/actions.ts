import { PayloadAction } from '@reduxjs/toolkit';
import { PokemonBasic, PokemonState } from '@types';
import includesPokemon from '@utils/includesPokemon';

const updatePokemonAction = (
  state: PokemonState,
  action: PayloadAction<PokemonBasic>,
): void => {
  const newPokemonId = action.payload.id;
  const isIncluded = includesPokemon(newPokemonId, state.pokemon);
  if (!isIncluded) {
    state.pokemon.push(action.payload);
  }
};

const setPokemonStateAction = (
  state: PokemonState,
  action: PayloadAction<PokemonState>,
): void => {
  state.pokemon.push(...action.payload.pokemon);
};

export { updatePokemonAction, setPokemonStateAction };
