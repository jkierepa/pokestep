import React, { useState } from 'react';
import { View, Dimensions, Animated } from 'react-native';

import Egg from '@components/Egg/Egg';
import { EggTypes } from '@types';

type MockData = {
  type: string;
  id: string;
  image: EggTypes | null;
};

const mockData: MockData[] = [
  // { type: 'spacer', image: null, id: 'leftSpacer2' },
  { type: 'spacer', image: null, id: 'leftSpacer' },
  { type: 'egg', image: 'eggBlue', id: 'egg1' },
  { type: 'egg', image: 'eggGold', id: 'egg2' },
  { type: 'egg', image: 'eggBlue', id: 'egg3' },
  { type: 'egg', image: 'eggBlue', id: 'egg4' },
  { type: 'egg', image: 'eggGold', id: 'egg5' },
  { type: 'egg', image: 'eggBlue', id: 'egg6' },
  { type: 'egg', image: 'eggOrange', id: 'egg7' },
  { type: 'egg', image: 'eggGreen', id: 'egg8' },
  { type: 'egg', image: 'eggOrange', id: 'egg9' },
  { type: 'egg', image: 'eggGreen', id: 'egg10' },
  { type: 'egg', image: 'eggGreen', id: 'egg11' },
  { type: 'egg', image: 'eggGreen', id: 'egg12' },
  { type: 'egg', image: 'eggRed', id: 'egg13' },
  { type: 'egg', image: 'eggGreen', id: 'egg14' },
  { type: 'egg', image: 'eggRed', id: 'egg15' },
  { type: 'spacer', image: null, id: 'rightSpacer' },
  // { type: 'spacer', image: null, id: 'rightSpacer2' },
];

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.26;
const SPACER_ITEM_WIDTH = (width - ITEM_WIDTH) / 2;

const Carousel = () => {
  const [eggData, setEggData] = useState<MockData[]>(mockData);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const handlePress = (itemId: string) => {
    const filteredData = eggData.filter((egg) => egg.id !== itemId);
    setEggData(filteredData);
    console.log('hatched');
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
      <Animated.FlatList
        style={{ height: 200 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={eggData}
        keyExtractor={(item) => item.id}
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

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp',
          });

          if (item.type === 'egg' && item.image) {
            return (
              <Animated.View
                style={{
                  transform: [{ translateY }],
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
    </View>
  );
};

export default Carousel;
