import styled from 'styled-components/native';

const StyledRoundButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  border-radius: 60px;
  border-width: 1px;
  border-color: black;
  border-style: solid;

  background-color: yellow;
`;

export default StyledRoundButton;
