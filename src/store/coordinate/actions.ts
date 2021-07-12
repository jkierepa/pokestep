import { PayloadAction } from '@reduxjs/toolkit';
import type { CoordinateState, Coordinates } from '../../types';

export const addCoordsAction = (
  state: CoordinateState,
  action: PayloadAction<Coordinates>,
): void => {
  state.prevLon = state.currLon;
  state.prevLat = state.currLat;
  state.currLon = action.payload.longitude;
  state.currLat = action.payload.latitude;
  console.log('state', state);
};

export const resetCoordsAction = (state: CoordinateState): void => {
  state.prevLon = 0;
  state.prevLat = 0;
  state.currLon = 0;
  state.currLat = 0;
  console.log('statereset', state);
};
