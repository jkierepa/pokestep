import React from 'react';

import { useAppSelector } from '@store/store';

import { HomeScreenNavigationProp } from '@navTypes';
import SafeArea from '@components/SafeArea/';
import Egg from '@components/Egg/Egg';
import LocationTracker from '@components/LocationTracker';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  const pokemonFound = useAppSelector((state) => state.distance.pokemonFound);

  return (
    <SafeArea>
      {Boolean(pokemonFound) && (
        <Egg onPress={() => navigation.navigate('Egg')} eggType="eggGreenBig" />
      )}
      <LocationTracker />
    </SafeArea>
  );
};

export default HomeScreen;
