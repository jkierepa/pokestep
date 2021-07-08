import React from 'react';

import StyledSafeAreaView from './styled';

type Props = {
  children: React.ReactNode;
};

const SafeArea = ({ children }: Props) => (
  <StyledSafeAreaView>{children}</StyledSafeAreaView>
);

export default SafeArea;
