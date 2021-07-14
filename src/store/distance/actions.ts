import { PayloadAction } from '@reduxjs/toolkit';
import { storeDistanceSliceData } from '../../infrastructure/asyncStorage/distanceSlice';
import type { DistanceState } from '../../types';
import getRandIntinRange from '../../utils/getRandIntInRange';
import { THRESHOLD_METERS_MIN, THRESHOLD_METERS_MAX } from '../../constants';

const updateDistanceAction = (
  state: DistanceState,
  action: PayloadAction<number>,
): void => {
  console.log('distanceUpdate');
  state.currentDistance += action.payload;
  if (state.threshold <= state.currentDistance) {
    state.currentDistance = 0;
    state.pokemonFound += 1;
    state.threshold = getRandIntinRange(
      THRESHOLD_METERS_MIN,
      THRESHOLD_METERS_MAX,
    );
  }
  storeDistanceSliceData(state);
};

const setDistanceStateAction = (
  state: DistanceState,
  action: PayloadAction<DistanceState>,
): void => {
  state.currentDistance = action.payload.currentDistance;
  state.pokemonFound = action.payload.pokemonFound;
  state.threshold = action.payload.threshold;
};

export { updateDistanceAction, setDistanceStateAction };
