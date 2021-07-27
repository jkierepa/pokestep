import React, { useEffect, useRef, useState } from 'react';
import { View, Animated } from 'react-native';

import { StyledProgressBar, AnimatedProgressBar } from './styled';

type Props = {
  currentValue: number;
  maxValue: number;
};

const ProgressBar = ({ currentValue, maxValue }: Props) => {
  const [progress, setProgress] = useState<number>(0);
  const animation = useRef(new Animated.Value(0));

  useEffect(() => {
    const percentage = Math.round((currentValue / maxValue) * 100);
    setProgress(percentage);
  }, [currentValue]);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
      }}
    >
      <StyledProgressBar>
        <AnimatedProgressBar style={{ width }} />
      </StyledProgressBar>
    </View>
  );
};

export default ProgressBar;
