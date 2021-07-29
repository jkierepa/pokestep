import React, { useEffect, useRef } from 'react';
import {
  Animated, View, TextInput, StyleSheet,
} from 'react-native';
import { Circle, Svg, G } from 'react-native-svg';

type Props = {
  radius?: number;
  color?: 'green' | 'red';
  donutWidth?: number;
  currentValue?: number;
  maxValue?: number;
  textColor?: string | '';
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const DonutProgress = ({
  radius = 100,
  color = 'green',
  donutWidth = 30,
  currentValue = 19,
  maxValue = 100,
  textColor,
}: Props) => {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const animatedCircleRef = useRef<any>(); // SVG types pls stop
  const animatedTextInputRef = useRef<TextInput>();
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
      if (animatedTextInputRef?.current) {
        animatedTextInputRef.current.setNativeProps({
          text: `${Math.round(value)}`,
        });
      }
    });
    return () => {
      animatedValue.removeAllListeners();
    };
  }, [currentValue, maxValue]);

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
      <AnimatedTextInput
        ref={animatedTextInputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          {
            fontSize: radius / 2,
            color: textColor ?? color,
            fontWeight: 'bold',
            textAlign: 'center',
          },
        ]}
      />
    </View>
  );
};

export default DonutProgress;
