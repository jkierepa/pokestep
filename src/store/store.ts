import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import coordinateReducer from './coordinate/slice';
import distanceReducer from './distance/slice';
import pokemonReducer from './pokemon/slice';

export const store = configureStore({
  reducer: {
    coordinate: coordinateReducer,
    distance: distanceReducer,
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
