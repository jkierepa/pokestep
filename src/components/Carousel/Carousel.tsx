import React, { useState, useEffect } from 'react';
import {
  View, Dimensions, Animated, Text,
} from 'react-native';

import Egg from '@components/Egg/Egg';
import { PokemonEgg } from '@types';

type EggData = {
  type: string;
  id: string | number;
  image: string | null;
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
const offsetY = 70;
const centerY = 50;

type Props = {
  eggs: PokemonEgg[];
};

const Carousel = ({ eggs }: Props) => {
  const [eggData, setEggData] = useState<EggData[]>([]);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setEggData(createEggData(eggs));
  }, [eggs]);

  const handlePress = (itemId: string | number) => {
    const filteredData = eggData.filter((egg) => egg.id !== itemId);
    setEggData(filteredData);
  };

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
      }}
    >
      {eggData.length === 0 ? (
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
              outputRange: [1, 1.4, 1],
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
                    onPress={() => handlePress(item.id)}
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
