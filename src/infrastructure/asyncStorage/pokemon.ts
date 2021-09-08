import AsyncStorage from '@react-native-async-storage/async-storage';
import { PokemonState } from '@types';

const storePokemon = async (value: PokemonState): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log('stored pokemon', jsonValue);
    await AsyncStorage.setItem('@pokemon', jsonValue);
    console.log('[STORAGE POKEMON] - SAVED');
  } catch (e) {
    console.log('[STORAGE POKEMON] - LOADED');
  }
};

const getPokemon = async (): Promise<PokemonState | void> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@pokemon');
    if (jsonValue !== null) {
      const value = JSON.parse(jsonValue);
      console.log('[STORAGE POKEMON] - LOADED');
      console.log('Loaded pokemon', value);
      return value;
    }
  } catch (e) {
    console.log('[STORAGE POKEMON] - LOADED ERROR', e);
  }
  return Promise.resolve();
};

export { storePokemon, getPokemon };
