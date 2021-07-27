import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { Circle, Svg, G } from 'react-native-svg';

type Props = {
  radius?: number;
  color?: 'green' | 'red';
  donutWidth?: number;
  currentValue?: number;
  maxValue?: number;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const DonutProgress = ({
  radius = 100,
  color = 'green',
  donutWidth = 30,
  currentValue = 19,
  maxValue = 100,
}: Props) => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const animatedCircleRef = useRef<any>(); // SVG types pls stop
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animation = (toValue: number) => Animated.timing(animatedValue, {
    toValue,
    duration: 250,
    delay: 0,
    useNativeDriver: true,
  }).start();

  const viewBoxSize = radius + donutWidth;
  const circumference = Math.PI * 2 * radius;

  useEffect(() => {
    animation(currentValue);

    animatedValue.addListener(({ value }) => {
      const strokeDashoffset = circumference - (circumference * value) / maxValue;
      if (animatedCircleRef?.current) {
        animatedCircleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [currentValue]);

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${viewBoxSize * 2} ${viewBoxSize * 2}`}
      >
        <G rotation="-90" origin={`${viewBoxSize}, ${viewBoxSize}`}>
          <Circle
            cx={viewBoxSize}
            cy={viewBoxSize}
            stroke={color}
            strokeWidth={donutWidth}
            strokeOpacity={0.4}
            r={radius}
            fill="transparent"
          />
          <AnimatedCircle
            ref={animatedCircleRef}
            cx={viewBoxSize}
            cy={viewBoxSize}
            stroke={color}
            strokeWidth={donutWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </View>
  );
};

export default DonutProgress;
