import AsyncStorage from '@react-native-async-storage/async-storage';
import type { DistanceState } from '../../types';

const storeDistanceSliceData = async (value: DistanceState): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@distance', jsonValue);
    console.log('[STORAGE DISTANCE] - SAVED');
  } catch (e) {
    console.log('[STORAGE DISTANCE] - SAVED ERROR', e);
  }
};

const getDistanceSliceData = async (): Promise<DistanceState | void> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@distance');
    if (jsonValue !== null) {
      const value = JSON.parse(jsonValue);
      console.log('[STORAGE DISTANCE] - LOADED');
      return value;
    }
  } catch (e) {
    console.log('[STORAGE DISTANCE] - LOADED ERROR', e);
  }
  return Promise.resolve();
};

export { storeDistanceSliceData, getDistanceSliceData };
