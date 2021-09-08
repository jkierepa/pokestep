import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DistanceState, PokemonEgg } from '@types';
import {
  updateDistanceAction,
  setDistanceStateAction,
  updateEggsAction,
} from './actions';

const initialState: DistanceState = {
  currentDistance: 0,
  // dev change from threshold: 1000,
  threshold: 5,
  pokemonFound: [],
};

export const distanceSlice = createSlice({
  name: 'distance',
  initialState,
  reducers: {
    updateDistance: (state, action: PayloadAction<number>) => {
      updateDistanceAction(state, action);
    },
    setDistanceState: (state, action: PayloadAction<DistanceState>) => {
      setDistanceStateAction(state, action);
    },
    updateEggs: (state, action: PayloadAction<PokemonEgg[]>) => {
      updateEggsAction(state, action);
    },
  },
});

export const { updateDistance, setDistanceState, updateEggs } = distanceSlice.actions;
export default distanceSlice.reducer;
