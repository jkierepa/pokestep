import AsyncStorage from '@react-native-async-storage/async-storage';
import type { DistanceState } from '../../types';

const storeDistanceSliceData = async (value: DistanceState): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
    console.log('[STORAGE] - SAVED');
  } catch (e) {
    console.log('[STORAGE] - SAVED ERROR', e);
  }
};

const getDistanceSliceData = async (): Promise<DistanceState | void> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    if (jsonValue !== null) {
      const value = JSON.parse(jsonValue);
      console.log('[STORAGE] - LOADED');
      return value;
    }
  } catch (e) {
    console.log('[STORAGE] - LOADED ERROR', e);
  }
  return Promise.resolve();
};

export { storeDistanceSliceData, getDistanceSliceData };
