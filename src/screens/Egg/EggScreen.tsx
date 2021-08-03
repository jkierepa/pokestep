import React from 'react';
import { Text } from 'react-native';

import SafeArea from '@components/SafeArea/';

const EggScreen = () => {
  const text = 'EGG SCREEN';
  return (
    <SafeArea>
      <Text>{text}</Text>
    </SafeArea>
  );
};

export default EggScreen;
