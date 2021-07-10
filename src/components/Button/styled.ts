import styled from 'styled-components/native';

const StyledButtonText = styled.Text`
  color: ${({ theme }) => theme.color.secondary};

  font-size: 24px;
  font-weight: bold;
`;

const StyledButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 50px;

  background-color: ${({ theme }) => theme.color.main};

  border-radius: 5px;
  border-width: 5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.main};
`;

export { StyledButton, StyledButtonText };
