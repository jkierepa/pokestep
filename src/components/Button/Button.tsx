import React from 'react';
import { Text } from 'react-native';

import defaultTheme from '@theme/theme';
import { StyledButton, StyledButtonOuter } from './styled';

type Props = {
  text?: string;
  onPress?: () => void;
};

const Button = ({ text = '', onPress }: Props) => (
  <StyledButtonOuter>
    <StyledButton onPress={onPress}>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'PressStart2P_400Regular',
          fontSize: 20,
          letterSpacing: 2,
          lineHeight: 30,
          color: defaultTheme.color.secondary,
        }}
      >
        {text}
      </Text>
    </StyledButton>
  </StyledButtonOuter>
);

export default Button;
