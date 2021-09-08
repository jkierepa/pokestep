import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';

import PokemonCard from '@components/PokemonCard/PokemonCard';
import RoundButton from '@components/RoundButton/RoundButton';

import { PokemonBasic } from '@types';

type Props = {
  isVisible: boolean;
  toggleModal: (confirmed: boolean) => void;
  displayedPokemon: PokemonBasic;
};

const HatchedPokemonModal = ({
  isVisible,
  toggleModal,
  displayedPokemon,
}: Props) => (
  <Modal isVisible={isVisible} backdropOpacity={0.4}>
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '70%',
        width: '100%',
      }}
    >
      <PokemonCard
        name={displayedPokemon.name}
        types={displayedPokemon.types}
        sprites={displayedPokemon.sprites}
        id={displayedPokemon.id}
        cardWidthPercent={50}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '80%',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <RoundButton type="cross" onPress={() => toggleModal(false)} />
        <RoundButton type="checkmark" onPress={() => toggleModal(true)} />
      </View>
    </View>
  </Modal>
);

export default HatchedPokemonModal;
