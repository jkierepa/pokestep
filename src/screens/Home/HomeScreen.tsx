import React from 'react';

import { useAppSelector } from '@store/store';

import { HomeScreenNavigationProp } from '@navTypes';
import SafeArea from '@components/SafeArea/';
import LocationTracker from '@components/LocationTracker/';
import DonutProgress from '@components/DonutProgress/DonutProgress';
import Egg from '@components/Egg/Egg';
import theme from '@theme/theme';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  const { currentDistance, threshold, pokemonFound } = useAppSelector(
    (state) => state.distance,
  );

  return (
    <SafeArea>
      <DonutProgress
        padding={50}
        color={theme.color.main}
        currentValue={currentDistance}
        maxValue={threshold}
      />
      <LocationTracker />
      {pokemonFound && <Egg onPress={() => navigation.navigate('Egg')} />}
    </SafeArea>
  );
};

export default HomeScreen;
