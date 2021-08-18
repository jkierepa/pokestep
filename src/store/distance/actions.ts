import { PayloadAction } from '@reduxjs/toolkit';
import getRandArrayElem from '@utils/getRandArrayElem';
import getRandIntinRange from '@utils/getRandIntInRange';
import type { DistanceState } from '@types';
import {
  THRESHOLD_METERS_MIN,
  THRESHOLD_METERS_MAX,
  EGG_TYPES,
} from '@constants';

const updateDistanceAction = (
  state: DistanceState,
  action: PayloadAction<number>,
): void => {
  state.currentDistance += action.payload;
  if (state.threshold <= state.currentDistance) {
    state.currentDistance = 0;
    state.pokemonFound.push({ eggType: getRandArrayElem(EGG_TYPES) });
    state.threshold = getRandIntinRange(
      THRESHOLD_METERS_MIN,
      THRESHOLD_METERS_MAX,
    );
  }
  console.log('[DISTANCE STATE] - UPDATED');
  console.log('[DISTANCE STATE]', state);
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
