import React from 'react';
import { Image } from 'react-native';

import StyledTouchable from './styled';

const source: { [key: string]: string } = {
  eggBlue: '@assets/egg/eggBlue.png',
  eggRed: '@assets/egg/eggRed.png',
  eggGold: '@assets/egg/eggGold.png',
  eggGreen: '@assets/egg/eggGreen.png',
  eggOrange: '@assets/egg/eggOrange.png',
};

type Props = {
  onPress?: (arg?: string) => void;
  eggType: string;
};

const Egg = ({ onPress, eggType }: Props) => {
  const handlePress = () => {
    if (onPress) onPress();
  };
  return (
    <StyledTouchable onPress={handlePress}>
      <Image
        source={{ uri: source[eggType] }}
        style={{
          flex: 1,
          resizeMode: 'contain',
        }}
      />
    </StyledTouchable>
  );
};

export default Egg;
