import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DistanceState } from '../../types';
import { updateDistanceAction, setDistanceStateAction } from './actions';

const initialState: DistanceState = {
  currentDistance: 0,
  // dev change from threshold: 1000,
  threshold: 5,
  pokemonFound: 0,
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
  },
});

export const { updateDistance, setDistanceState } = distanceSlice.actions;
export default distanceSlice.reducer;
