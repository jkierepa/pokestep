import React from 'react';
import { Image } from 'react-native';

import { EggTypes } from '@types';

import eggGreenBig from '@assets/egg/eggGreenBig.png';
import eggBlue from '@assets/egg/eggBlue.png';
import eggRed from '@assets/egg/eggRed.png';
import eggGold from '@assets/egg/eggGold.png';
import eggGreen from '@assets/egg/eggGreen.png';
import eggOrange from '@assets/egg/eggOrange.png';

import StyledTouchable from './styled';

const source = {
  eggBlue,
  eggRed,
  eggGold,
  eggGreen,
  eggOrange,
  eggGreenBig,
};

type Props = {
  onPress?: (arg?: string) => void;
  eggType: EggTypes;
};

const Egg = ({ onPress, eggType }: Props) => {
  const handlePress = () => {
    if (onPress) onPress();
  };
  return (
    <StyledTouchable onPress={handlePress}>
      <Image
        source={source[eggType]}
        style={{
          flex: 1,
          resizeMode: 'contain',
        }}
      />
    </StyledTouchable>
  );
};

export default Egg;
