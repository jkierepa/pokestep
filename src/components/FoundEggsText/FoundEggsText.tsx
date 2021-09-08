import React from 'react';
import { Text, View } from 'react-native';

import RoundButton from '@components/RoundButton/RoundButton';

import defaultTheme from '@theme/theme';

type Props = {
  eggsNumber: number;
};

const FoundEggsText = ({ eggsNumber }: Props) => (
  <View
    style={{
      width: '100%',
      height: '20%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      backgroundColor: defaultTheme.color.tertiary,
    }}
  >
    {eggsNumber === 1 && (
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'PressStart2P_400Regular',
          fontSize: 20,
          letterSpacing: 2,
          color: defaultTheme.color.secondary,
        }}
      >
        You have found 1 Pokemon egg! Check it out in your backpack!
      </Text>
    )}
    {eggsNumber > 1 && (
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'PressStart2P_400Regular',
          fontSize: 16,
          letterSpacing: 3,
          lineHeight: 20,
          color: defaultTheme.color.secondary,
        }}
      >
        You have found
        {' '}
        {eggsNumber}
        {' '}
        Pokemon eggs! Check them out in your
        backpack!
      </Text>
    )}
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <View style={{ marginHorizontal: 10 }}>
        <RoundButton type="backpack" isMinature />
      </View>
    </View>
  </View>
);

export default FoundEggsText;
