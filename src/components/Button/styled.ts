import styled from 'styled-components/native';

const StyledButtonText = styled.Text`
  color: ${({ theme }) => theme.color.secondary};

  font-size: 24px;
  font-weight: bold;
`;

const StyledButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 75px;

  background-color: ${({ theme }) => theme.color.main};

  border-radius: 10px;
  border-width: 5px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.main};
`;

export { StyledButton, StyledButtonText };
