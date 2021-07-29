import React, { useEffect, useRef } from 'react';
import { Dimensions, Animated } from 'react-native';
import { Circle, Svg } from 'react-native-svg';

const { width } = Dimensions.get('window'); // get width of app window
const size = width - 50; // add padding
const center = size / 2;
const strokeWidth = 40;
const radius = (size - strokeWidth) / 2; // diameter / 2
const circumference = radius * 2 * Math.PI;

type Props = {
  percentage: number;
};

const CircularProgress = ({ percentage }: Props) => {
  const progressAnimation = useRef(new Animated.Value(0)).current;

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const progressRef = useRef<any>(null); // SVG types wtf?

  const animation = (toValue: number) => Animated.timing(progressAnimation, {
    toValue,
    duration: 250,
    useNativeDriver: true,
  }).start();

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(({ value }) => {
      const strokeDashoffset = (circumference * value) / 100;
      if (progressRef !== null && progressRef.current !== null) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [percentage]);

  return (
    <Svg width={size} height={size}>
      <Circle
        stroke="#ABABAB"
        fill="none"
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
      />
      <Circle
        ref={progressRef}
        stroke="#edd560"
        fill="none"
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
      />
    </Svg>
  );
};

export default CircularProgress;
