import React from 'react';
import { Text } from 'react-native';

import SafeArea from '@components/SafeArea/';
import { useAppSelector } from '@store/store';
import Carousel from '@components/Carousel/Carousel';

const EggScreen = () => {
  const pokemonFound = useAppSelector((state) => state.distance.pokemonFound);
  return (
    <SafeArea>
      {pokemonFound.length === 0 ? (
        <Text>NO POKEMON EGGS</Text>
      ) : (
        <Carousel eggs={pokemonFound} />
      )}
    </SafeArea>
  );
};

export default EggScreen;
