import React from 'react';

import { useAppSelector } from '@store/store';

import { HomeScreenNavigationProp } from '@navTypes';
import SafeArea from '@components/SafeArea/';
import Egg from '@components/Egg/Egg';
import Carousel from '@components/Carousel/Carousel';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  const pokemonFound = useAppSelector((state) => state.distance.pokemonFound);

  return (
    <SafeArea>
      <Carousel />
      {Boolean(pokemonFound) && (
        <Egg onPress={() => navigation.navigate('Egg')} eggType="eggGreenBig" />
      )}
    </SafeArea>
  );
};

export default HomeScreen;
