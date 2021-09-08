import React, { useEffect, useRef } from 'react';
import {
  Animated,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Circle, Svg, G } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

type Props = {
  padding?: number;
  donutWidth?: number;
  currentValue: number;
  maxValue?: number;
  color?: string;
  textColor?: string;
};

const DonutProgress = ({
  padding = 0,
  color,
  donutWidth = 20,
  currentValue,
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

  const { width } = Dimensions.get('window');
  const viewBoxSize = width - padding;
  const radius = (viewBoxSize - donutWidth) / 2;
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
        const percentage = (value / maxValue) * 100;
        animatedTextInputRef.current.setNativeProps({
          text: `${Math.round(percentage)}%`,
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
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      >
        <G rotation="-90" origin={`${viewBoxSize / 2}, ${viewBoxSize / 2}`}>
          <Circle
            cx={viewBoxSize / 2}
            cy={viewBoxSize / 2}
            stroke={color}
            strokeWidth={donutWidth}
            strokeOpacity={0.3}
            r={radius}
            fill="transparent"
          />
          <AnimatedCircle
            ref={animatedCircleRef}
            cx={viewBoxSize / 2}
            cy={viewBoxSize / 2}
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
            fontSize: radius * 0.75,
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
