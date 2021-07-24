import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PokemonState, PokemonBasic } from '@types';
import { setPokemonStateAction, updatePokemonAction } from './actions';

const initialState: PokemonState = {
  pokemon: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonState: (state, action: PayloadAction<PokemonState>) => {
      setPokemonStateAction(state, action);
    },
    updatePokemon: (state, action: PayloadAction<PokemonBasic>) => {
      updatePokemonAction(state, action);
    },
  },
});

export const { setPokemonState, updatePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
