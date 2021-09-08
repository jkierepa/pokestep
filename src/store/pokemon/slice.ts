import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PokemonState, PokemonDetailed } from '@types';
import { setPokemonStateAction, addPokemonAction } from './actions';

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
    addPokemon: (state, action: PayloadAction<PokemonDetailed>) => {
      addPokemonAction(state, action);
    },
  },
});

export const { setPokemonState, addPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
