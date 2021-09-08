import { EGG_IMAGES } from '@constants';
import { EggType } from '@types';
import React from 'react';
import { Image, Dimensions } from 'react-native';

import StyledTouchable from './styled';

const size = Dimensions.get('window').width * 0.25;

type Props = {
  onPress?: (arg?: string) => void;
  eggType: EggType;
};

const Egg = ({ onPress, eggType }: Props) => {
  const handlePress = () => {
    if (onPress) onPress();
  };
  return (
    <StyledTouchable onPress={handlePress} size={size}>
      <Image
        source={EGG_IMAGES[eggType]}
        style={[
          {
            flex: 1,
            resizeMode: 'contain',
          },
        ]}
      />
    </StyledTouchable>
  );
};

export default Egg;
