import { PayloadAction } from '@reduxjs/toolkit';
import type { CoordinateState, Coordinates } from '../../../types';

const addCurrCoords = (
  state: CoordinateState,
  action: PayloadAction<Coordinates>,
): void => {
  if (state.currLat && state.currLon) {
    state.currLon = action.payload.longitute;
    state.currLat = action.payload.latitude;
  } else {
    state.prevLon = state.currLon;
    state.prevLat = state.currLat;
    state.currLon = action.payload.longitute;
    state.currLat = action.payload.latitude;
  }
};

export default addCurrCoords;
