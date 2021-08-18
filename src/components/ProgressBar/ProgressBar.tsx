import React, { useEffect, useRef, useState } from 'react';
import { View, Animated } from 'react-native';

import styles from './styles';

type Props = {
  currentValue: number;
  maxValue: number;
  fillColor?: string;
};

const ProgressBar = ({ currentValue, maxValue, fillColor = 'red' }: Props) => {
  const [progress, setProgress] = useState<number>(0);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const percentage = Math.round((currentValue / maxValue) * 100);
    setProgress(percentage);
  }, [currentValue]);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: progress,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <Animated.View
          style={[styles.filled, { width, backgroundColor: fillColor }]}
        />
      </View>
    </View>
  );
};

export default ProgressBar;
