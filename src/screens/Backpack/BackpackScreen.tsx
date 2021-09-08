import React from 'react';
import { Text, View } from 'react-native';

import SafeArea from '@components/SafeArea/';
import Carousel from '@components/Carousel/Carousel';
import { useAppSelector } from '@store/store';
import Hamburger from '@components/Hamburger/Hamburger';

const BackpackScreen = () => {
  const pokemonFound = useAppSelector((state) => state.distance.pokemonFound);
  return (
    <SafeArea>
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginTop: 10,
            alignItems: 'flex-end',
          }}
        >
          <Hamburger exclude="backpack" />
        </View>
        {pokemonFound.length === 0 ? (
          <Text>NO POKEMON EGGS</Text>
        ) : (
          <Carousel eggs={pokemonFound} />
        )}
      </View>
    </SafeArea>
  );
};

export default BackpackScreen;
