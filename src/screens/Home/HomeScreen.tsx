import React from 'react';

import { useAppSelector } from '@store/store';

import SafeArea from '@components/SafeArea/';
import LocationTracker from '@components/LocationTracker';
import Hamburger from '@components/Hamburger/Hamburger';
import FoundEggsText from '@components/FoundEggsText/FoundEggsText';
import { View } from 'react-native';
import DonutProgress from '@components/DonutProgress/DonutProgress';
import defaultTheme from '@theme/theme';

const HomeScreen = () => {
  const { pokemonFound, threshold, currentDistance } = useAppSelector(
    (state) => state.distance,
  );

  return (
    <SafeArea>
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginTop: 10,
            alignItems: 'flex-end',
          }}
        >
          <Hamburger exclude="home" />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: '50%',
          }}
        >
          <DonutProgress
            textColor={defaultTheme.color.main}
            color={defaultTheme.color.main}
            donutWidth={20}
            currentValue={currentDistance}
            maxValue={threshold}
            padding={250}
          />
          <LocationTracker />
        </View>
        {pokemonFound.length !== 0 && (
          <FoundEggsText eggsNumber={pokemonFound.length} />
        )}
      </View>
    </SafeArea>
  );
};

export default HomeScreen;
