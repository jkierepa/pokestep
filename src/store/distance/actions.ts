import { PayloadAction } from '@reduxjs/toolkit';
import type { DistanceState } from '../../types';
import getRandIntinRange from '../../utils/getRandIntInRange';
import { THRESHOLD_METERS_MIN, THRESHOLD_METERS_MAX } from '../../constants';

const subtractDistanceAction = (
  state: DistanceState,
  action: PayloadAction<number>,
): void => {
  state.currentDistance -= action.payload;
  if (state.threshold <= 0) {
    state.currentDistance = 0;
    state.pokemonFound += 1;
    state.threshold = getRandIntinRange(
      THRESHOLD_METERS_MIN,
      THRESHOLD_METERS_MAX,
    );
  }
};

const setDistanceStateAction = (
  state: DistanceState,
  action: PayloadAction<DistanceState>,
): void => {
  state.currentDistance = action.payload.currentDistance;
  state.pokemonFound = action.payload.pokemonFound;
  state.threshold = action.payload.threshold;
};

export { subtractDistanceAction, setDistanceStateAction };
