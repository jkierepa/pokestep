import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DistanceState } from '../../types';
import { subtractDistanceAction, setDistanceStateAction } from './actions';

const initialState: DistanceState = {
  currentDistance: 0,
  threshold: 0,
  pokemonFound: 0,
};

export const distanceSlice = createSlice({
  name: 'distance',
  initialState,
  reducers: {
    subtractDistance: (state, action: PayloadAction<number>) => {
      subtractDistanceAction(state, action);
    },
    setDistanceState: (state, action: PayloadAction<DistanceState>) => {
      setDistanceStateAction(state, action);
    },
  },
});

export const { subtractDistance, setDistanceState } = distanceSlice.actions;
export default distanceSlice.reducer;
