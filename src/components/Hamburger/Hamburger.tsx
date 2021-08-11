import { HamburgerTypes } from '@types';
import removeFromArray from '@utils/removeFromArray';
import React, { useState } from 'react';
import { View } from 'react-native';
import HamburgerButton from './Button/HamburgerButton';
import StyledRow from './styled';

const allNavIcons: HamburgerTypes[] = ['home', 'backpack', 'egg', 'pokeball'];

type Props = {
  exclude: HamburgerTypes;
};

const Hamburger = ({ exclude }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const selected = removeFromArray(allNavIcons, exclude);

  return (
    <StyledRow>
      <View>
        <HamburgerButton
          type="hamburger"
          onPress={() => setIsExpanded(!isExpanded)}
        />
      </View>

      {isExpanded && (
        <StyledRow>
          {selected.map((element) => (
            <HamburgerButton type={element} key={element} />
          ))}
        </StyledRow>
      )}
    </StyledRow>
  );
};

export default Hamburger;
