import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native-safe-area-context';

const StyledSafeAreaView = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.backgroundColor.main};
`;

export default StyledSafeAreaView;
