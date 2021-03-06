import React, { useRef, useEffect } from 'react';
import { Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HamburgerTypes } from '@types';

import backpack from '@assets/icons/backpack.png';
import pokeball from '@assets/icons/pokeball.png';
import home from '@assets/icons/home.png';
import hamburger from '@assets/icons/hamburger.png';
import { StyledRoundButton, StyledRoundButtonOuter } from './styled';

const icons = {
  backpack,
  pokeball,
  home,
  hamburger,
};

const navs = {
  backpack: 'Backpack',
  pokeball: 'Pokeball',
  home: 'Home',
  hamburger: '',
};

type Props = {
  onPress?: () => void;
  type: HamburgerTypes;
  isMinature?: boolean;
  isAnimated?: boolean;
};

const AnimatedOuter = Animated.createAnimatedComponent(StyledRoundButtonOuter);

const HamburgerButton = ({
  onPress,
  type,
  isMinature = false,
  isAnimated = false,
}: Props) => {
  const navigation = useNavigation();
  const scaleAnimation = useRef(new Animated.Value(0)).current;

  const scale = scaleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2],
  });

  const opacity = scaleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(scaleAnimation, {
        toValue: 0,
        duration: 1,
        delay: 0,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  if (isAnimated) {
    return (
      <AnimatedOuter
        isMinature={isMinature}
        style={{ opacity, transform: [{ scale }] }}
      >
        <StyledRoundButton
          onPress={onPress || (() => navigation.navigate(navs[type]))}
          isMinature={isMinature}
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
      </AnimatedOuter>
    );
  }

  return (
    <StyledRoundButtonOuter isMinature={isMinature}>
      <StyledRoundButton
        onPress={onPress || (() => navigation.navigate(navs[type]))}
        isMinature={isMinature}
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
    </StyledRoundButtonOuter>
  );
};

export default HamburgerButton;
