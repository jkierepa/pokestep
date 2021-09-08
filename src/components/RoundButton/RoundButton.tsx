import React, { useRef, useEffect } from 'react';
import { Image, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HamburgerTypes } from '@types';

import backpack from '@assets/icons/backpack.png';
import pokeball from '@assets/icons/pokeball.png';
import home from '@assets/icons/home.png';
import hamburger from '@assets/icons/hamburger.png';
import checkmark from '@assets/icons/checkmark.png';
import cross from '@assets/icons/cross.png';
import styles from './styles';

const icons = {
  backpack,
  pokeball,
  home,
  hamburger,
  checkmark,
  cross,
};

const navs = {
  backpack: 'Backpack',
  pokeball: 'Pokeball',
  home: 'Home',
  hamburger: '',
  checkmark: '',
  cross: '',
};

type Props = {
  onPress?: () => void;
  type: HamburgerTypes | 'checkmark' | 'cross';
  isMinature?: boolean;
  isAnimated?: boolean;
};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const RoundButton = ({
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
    if (isAnimated) {
      Animated.loop(
        Animated.timing(scaleAnimation, {
          toValue: 1,
          duration: 2000,
          delay: 0,
          useNativeDriver: true,
        }),
      ).start();
    }
  }, []);

  return (
    <AnimatedTouchable
      style={[
        styles.defaultOuter,
        isMinature && styles.minatureOuter,
        { opacity, transform: [{ scale }] },
      ]}
    >
      <TouchableOpacity
        onPress={onPress || (() => navigation.navigate(navs[type]))}
        style={[styles.defaultInner, isMinature && styles.minatureInner]}
      >
        <Image
          source={icons[type]}
          style={{
            flex: 1,
            margin: 5,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </AnimatedTouchable>
  );
};
export default RoundButton;
