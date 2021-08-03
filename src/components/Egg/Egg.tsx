import React from 'react';
import { Image } from 'react-native';

import eggJump from '@assets/egg/eggJump.gif';
import { StyledTouchable } from './styled';

type Props = {
  onPress?: () => void;
};

const Egg = ({ onPress }: Props) => (
  <StyledTouchable onPress={onPress}>
    <Image
      source={eggJump}
      style={{
        flex: 1,
        resizeMode: 'contain',
      }}
    />
  </StyledTouchable>
);

export default Egg;
