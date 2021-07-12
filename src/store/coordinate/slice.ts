import { createSlice } from '@reduxjs/toolkit';
import type { CoordinateState } from '../../types';
import addCurrCoords from './actions/addCurrCoords';

const initialState: CoordinateState = {
  currLat: 0,
  currLon: 0,
  prevLat: 0,
  prevLon: 0,
};

export const coordinateSlice = createSlice({
  name: 'coordinate',
  initialState,
  reducers: { addCurrCoords },
});

export default coordinateSlice.reducer;
