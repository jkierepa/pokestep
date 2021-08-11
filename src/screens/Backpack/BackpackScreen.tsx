import React from 'react';
import { Text } from 'react-native';

import SafeArea from '@components/SafeArea/';

const BackpackScreen = () => {
  const text = 'INVENTORY SCREEN';
  return (
    <SafeArea>
      <Text>{text}</Text>
    </SafeArea>
  );
};

export default BackpackScreen;
