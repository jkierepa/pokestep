import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 75px;

  background-color: ${({ theme }) => theme.color.main};

  border-radius: 10px;
`;

const StyledButtonOuter = styled(StyledButton)`
  width: 270px;
  height: 95px;

  background-color: transparent;

  border-radius: 20px;
  border-width: 5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.main};
`;

export { StyledButton, StyledButtonOuter };
