import { PayloadAction } from '@reduxjs/toolkit';
import getRandArrayElem from '@utils/getRandArrayElem';
import getRandIntinRange from '@utils/getRandIntInRange';
import type { DistanceState, PokemonEgg } from '@types';
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
    const tempState = [
      ...state.pokemonFound,
      { eggType: getRandArrayElem(EGG_TYPES) },
    ];
    state.pokemonFound = tempState;
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

const updateEggsAction = (
  state: DistanceState,
  action: PayloadAction<PokemonEgg[]>,
): void => {
  state.pokemonFound = action.payload;
};

export { updateDistanceAction, setDistanceStateAction, updateEggsAction };
