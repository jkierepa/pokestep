import React from 'react';
import { Text } from 'react-native';

import SafeArea from '@components/SafeArea/';
import { useAppSelector } from '@store/store';

const EggScreen = () => {
  const pokemonFound = useAppSelector((state) => state.distance.pokemonFound);
  const pokemonText = pokemonFound
    ? `YOU HAVE ${pokemonFound} POKEMON!`
    : 'KEEP SEARCHING!';
  const text = 'EGG SCREEN';
  return (
    <SafeArea>
      <Text>{text}</Text>
      <Text>{pokemonText}</Text>
    </SafeArea>
  );
};

export default EggScreen;
