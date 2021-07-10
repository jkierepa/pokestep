import React from 'react';
import { StyledButton, StyledButtonText } from './styled';

type Props = {
  text?: string;
  onPress?: () => void;
};

const Button = ({ text = '', onPress }: Props) => (
  <StyledButton onPress={onPress}>
    <StyledButtonText>{text}</StyledButtonText>
  </StyledButton>
);

export default Button;
