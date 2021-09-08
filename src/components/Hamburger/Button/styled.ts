import styled from 'styled-components/native';

const StyledRoundButton = styled.TouchableOpacity<{ isMinature: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => (props.isMinature ? 40 : 60)}px;
  height: ${(props) => (props.isMinature ? 40 : 60)}px;

  border-radius: ${(props) => (props.isMinature ? 40 : 60)}px;

  background-color: ${({ theme }) => theme.color.main};
`;

const StyledRoundButtonOuter = styled(StyledRoundButton)<{
  isMinature: boolean;
}>`
  width: ${(props) => (props.isMinature ? 48 : 72)}px;
  height: ${(props) => (props.isMinature ? 48 : 72)}px;

  border-radius: ${(props) => (props.isMinature ? 48 : 72)}px;
  border-width: ${(props) => (props.isMinature ? 2 : 3)}px;
  border-color: ${({ theme }) => theme.color.main};

  background-color: transparent;
`;

export { StyledRoundButtonOuter, StyledRoundButton };
