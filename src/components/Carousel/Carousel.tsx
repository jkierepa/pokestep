import React, { useState, useEffect } from 'react';
import {
  View,
  Dimensions,
  Animated,
  Text,
  ActivityIndicator,
} from 'react-native';

import Egg from '@components/Egg/Egg';
import HatchedPokemonModal from '@components/HatchedPokemonModal/HatchedPokemonModal';
import {
  EggType, PokemonBasic, PokemonDetailed, PokemonEgg,
} from '@types';
import { useAppDispatch } from '@store/store';
import getPokemonId from '@infrastructure/pokemonFetching/getPokemonId';
import fetchPokemon from '@infrastructure/pokemonFetching/fetchPokemon';
import { EGG_TO_TYPE } from '@constants';
import defaultTheme from '@theme/theme';

import { addPokemon } from '@store/pokemon/slice';
import { updateEggs } from '@store/distance/slice';

type EggData = {
  type: string;
  id: string | number;
  image: EggType | null;
};

const fetchPokemonFromApi = async () => {
  const id = await getPokemonId();
  const pokemon = await fetchPokemon(id);
  return pokemon;
};

const getNewEggsFromEggData = (data: EggData[]): PokemonEgg[] => {
  const newEggs: PokemonEgg[] = [];
  data.forEach((d: EggData) => {
    if (d.type === 'egg' && d.image) {
      const type = d.image;
      newEggs.push({ eggType: type });
    }
  });
  console.log('newegss', newEggs);
  return newEggs;
};

// TODO: fetch next pokemon in evolution instead
const addDetailsPokemon = (pokemon: PokemonBasic): PokemonDetailed => {
  const detailed: PokemonDetailed = {
    ...pokemon,
    currentExp: 0,
    thresholdExp: 1000,
    idAfterLevel: pokemon.id + 1,
  };
  return detailed;
};

const getPokemon = async (
  targetType: EggType | null,
  // eslint-disable-next-line consistent-return
): Promise<PokemonBasic | undefined> => {
  let isCorrect = false;
  while (!isCorrect) {
    setTimeout(() => {}, 250);
    // eslint-disable-next-line no-await-in-loop
    const pokemon = await fetchPokemonFromApi();
    if (
      pokemon
      && targetType
      && pokemon?.types.includes(EGG_TO_TYPE[targetType])
    ) {
      isCorrect = true;
      return pokemon;
    }
  }
};

const createEggData = (eggs: PokemonEgg[]): EggData[] => {
  const leftSpacer = { type: 'spacer', image: null, id: 'leftSpacer' };
  const rightSpacer = { type: 'spacer', image: null, id: 'rightSpacer' };
  const data: EggData[] = [leftSpacer];
  eggs.forEach((egg: PokemonEgg, index) => {
    data.push({ type: 'egg', image: egg.eggType, id: index });
  });
  data.push(rightSpacer);
  return data;
};

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.26;
const SPACER_ITEM_WIDTH = (width - ITEM_WIDTH) / 2;
const offsetY = 100;
const centerY = 90;

type Props = {
  eggs: PokemonEgg[];
};

const Carousel = ({ eggs }: Props) => {
  const [eggData, setEggData] = useState<EggData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [displayedPokemon, setDisplayedPokemon] = useState<PokemonBasic>();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = createEggData(eggs);
    setEggData(data);
  }, [eggs]);

  useEffect(() => {
    setIsLoading(false);
    setIsVisible(true);
  }, [displayedPokemon]);

  const handlePress = async (itemId: string | number, type: EggType | null) => {
    setIsLoading(true);
    const filteredData = eggData.filter((egg) => egg.id !== itemId);
    const pokemon = await getPokemon(type);
    setEggData(filteredData);
    setDisplayedPokemon(pokemon);
  };

  const handlePokemonModal = (isConfirmed: boolean) => {
    if (isConfirmed && displayedPokemon) {
      const detailedPokemon = addDetailsPokemon(displayedPokemon);
      dispatch(addPokemon(detailedPokemon));
    }
    const newEggs = getNewEggsFromEggData(eggData);
    dispatch(updateEggs(newEggs));
    setIsVisible(false);
  };

  if (isVisible && displayedPokemon) {
    return (
      <HatchedPokemonModal
        isVisible={isVisible}
        toggleModal={(isConfirmed) => handlePokemonModal(isConfirmed)}
        displayedPokemon={displayedPokemon}
      />
    );
  }

  if (isLoading) {
    return <ActivityIndicator size="large" color={defaultTheme.color.main} />;
  }

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
      }}
    >
      {eggData.length !== 0 ? (
        <Animated.FlatList
          style={{ height: 200 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={eggData}
          keyExtractor={(item) => item.id.toString()}
          snapToInterval={ITEM_WIDTH}
          decelerationRate={0}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true },
          )}
          scrollEventThrottle={16}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 2) * ITEM_WIDTH,
              (index - 1) * ITEM_WIDTH,
              index * ITEM_WIDTH,
            ];

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [1, 1.3, 1],
              extrapolate: 'clamp',
            });

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [offsetY, centerY, offsetY],
              extrapolate: 'clamp',
            });

            if (item.type === 'egg' && item.image) {
              return (
                <Animated.View
                  style={{
                    transform: [{ translateY }, { scale }],
                    width: ITEM_WIDTH,
                    alignItems: 'center',
                  }}
                >
                  <Egg
                    onPress={() => handlePress(item.id, item.image)}
                    eggType={item.image}
                  />
                </Animated.View>
              );
            }

            return <View style={{ width: SPACER_ITEM_WIDTH }} />;
          }}
        />
      ) : (
        <Text>LOADING...</Text>
      )}
    </View>
  );
};

export default Carousel;
