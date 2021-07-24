import { useEffect } from 'react';

import { getPokemon } from '@infrastructure/asyncStorage/pokemon';
import { setPokemonState } from '@store/pokemon/slice';
import { useAppDispatch } from '@store/store';
import { getDistanceSliceData } from '@infrastructure/asyncStorage/distanceSlice';
import { setDistanceState } from '@store/distance/slice';

const useSetStateFromStorage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const distanceData = await getDistanceSliceData();
      const pokemonData = await getPokemon();

      if (distanceData) {
        dispatch(setDistanceState(distanceData));
      }
      if (pokemonData) {
        dispatch(setPokemonState(pokemonData));
      }
    })();
  }, []);
};

export default useSetStateFromStorage;
