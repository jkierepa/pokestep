import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CoordinateState, Coordinates } from '../../types';
import { addCoordsAction, resetCoordsAction } from './actions';

const initialState: CoordinateState = {
  currLat: 0,
  currLon: 0,
  prevLat: 0,
  prevLon: 0,
};

export const coordinateSlice = createSlice({
  name: 'coordinate',
  initialState,
  reducers: {
    addCoords: (state, action: PayloadAction<Coordinates>) => addCoordsAction(state, action),
    resetCoords: (state) => resetCoordsAction(state),
  },
});

export const { addCoords, resetCoords } = coordinateSlice.actions;
export default coordinateSlice.reducer;
