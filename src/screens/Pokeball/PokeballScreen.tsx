import React from 'react';
import { Text } from 'react-native';

import SafeArea from '@components/SafeArea/';

const PokeballScreen = () => {
  const text = 'POKEMON SCREEN';
  return (
    <SafeArea>
      <Text>{text}</Text>
    </SafeArea>
  );
};

export default PokeballScreen;
