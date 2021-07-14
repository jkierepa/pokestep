import AsyncStorage from '@react-native-async-storage/async-storage';
import type { DistanceState } from '../../types';

const storeDistanceSliceData = async (value: DistanceState): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    console.log('asyncStoreErr', e);
  }
};

const getDistanceSliceData = async (): Promise<DistanceState | void> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    if (jsonValue !== null) {
      const value = JSON.parse(jsonValue);
      return value;
    }
  } catch (e) {
    console.log('asyncStoreErr', e);
  }
  return Promise.resolve();
};

export { storeDistanceSliceData, getDistanceSliceData };
