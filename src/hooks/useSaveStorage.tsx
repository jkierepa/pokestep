import { useEffect } from 'react';
import { storePokemon } from '@infrastructure/asyncStorage/pokemon';
import { useAppSelector } from '@store/store';
import { storeDistanceSliceData } from '@infrastructure/asyncStorage/distanceSlice';

const useSaveStorage = () => {
  const distanceState = useAppSelector((state) => state.distance);
  const pokemonState = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    storeDistanceSliceData(distanceState);
  }, [distanceState]);

  useEffect(() => {
    storePokemon(pokemonState);
  }, [pokemonState]);
};

export default useSaveStorage;
