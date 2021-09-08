import styled from 'styled-components/native';

const StyledTouchable = styled.TouchableOpacity<{ size: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  background-color: transparent;
`;

export default StyledTouchable;
