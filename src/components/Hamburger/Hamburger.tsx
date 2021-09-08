import { HamburgerTypes } from '@types';
import removeFromArray from '@utils/removeFromArray';
import React, { useState } from 'react';
import { View, LayoutAnimation } from 'react-native';
import HamburgerButton from './Button/HamburgerButton';
import StyledRow from './styled';

const allNavIcons: HamburgerTypes[] = ['home', 'backpack', 'pokeball'];

type Props = {
  exclude: HamburgerTypes;
};

const Hamburger = ({ exclude }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const selected = removeFromArray(allNavIcons, exclude);
  const toggleSlide = () => {
    setIsExpanded(!isExpanded);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <StyledRow>
      <View>
        <HamburgerButton type="hamburger" onPress={() => toggleSlide()} />
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
