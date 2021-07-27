import { Animated } from 'react-native';
import styled from 'styled-components/native';

const StyledProgressBar = styled.View`
  height: 20px;
  width: 100%;
  background-color: #fff;
  border-color: #000;
  border-width: 2px;
  border-radius: 5px;
`;

const AnimatedProgressBar = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-color: red;
`;

export { StyledProgressBar, AnimatedProgressBar };
