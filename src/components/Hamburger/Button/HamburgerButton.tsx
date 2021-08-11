import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HamburgerTypes } from '@types';

import backpack from '@assets/icons/backpack.png';
import egg from '@assets/icons/egg.png';
import pokeball from '@assets/icons/pokeball.png';
import home from '@assets/icons/home.png';
import hamburger from '@assets/icons/hamburger.png';
import StyledRoundButton from './styled';

const icons = {
  backpack,
  egg,
  pokeball,
  home,
  hamburger,
};

const navs = {
  backpack: 'Backpack',
  egg: 'Egg',
  pokeball: 'Pokeball',
  home: 'Home',
  hamburger: '',
};

type Props = {
  onPress?: () => void;
  type: HamburgerTypes;
};

const HamburgerButton = ({ onPress, type }: Props) => {
  const navigation = useNavigation();
  return (
    <StyledRoundButton
      onPress={onPress || (() => navigation.navigate(navs[type]))}
    >
      <Image
        source={icons[type]}
        style={{
          flex: 1,
          margin: 5,
          resizeMode: 'contain',
        }}
      />
    </StyledRoundButton>
  );
};

export default HamburgerButton;
