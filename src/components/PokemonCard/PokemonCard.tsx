import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { POKEMON_TYPE_COLORS } from '@constants';
import { PokemonType, PokemonBasic } from '@types';
import capitalizeFirstLetter from '@utils/capitalizeFirstLetter';

import ProgressBar from '@components/ProgressBar/ProgressBar';
import styles from './styles';

type Props = PokemonBasic & { cardWidthPercent?: 20 | 25 | 40 | 50 };

const nameSize = {
  20: 8,
  25: 10,
  40: 18,
  50: 20,
};
const idSize = {
  20: 6,
  25: 8,
  40: 14,
  50: 16,
};

const PokemonCard = ({
  name,
  id,
  sprites,
  types,
  cardWidthPercent = 40,
}: Props) => {
  const [typeColors, setTypeColors] = useState<string[]>([]);
  const [withProgessBar, setWithProgressBar] = useState<boolean>(true);

  useEffect(() => {
    if (cardWidthPercent < 40) {
      setWithProgressBar(false);
    } else {
      setWithProgressBar(true);
    }
  }, [cardWidthPercent]);

  useEffect(() => {
    const mappedColors = types.map(
      (type: PokemonType) => POKEMON_TYPE_COLORS[type],
    );
    if (mappedColors.length === 1) mappedColors.push(mappedColors[0]);
    setTypeColors(mappedColors);
  }, [types]);

  return (
    <>
      {typeColors.length !== 0 && (
        <LinearGradient
          colors={typeColors}
          locations={[0.45, 0.55]}
          style={[
            styles.card,
            styles.shadow,
            { width: `${cardWidthPercent}%` },
          ]}
        >
          <LinearGradient
            colors={typeColors}
            locations={[0.2, 0.8]}
            style={[
              styles.card,
              styles.shadow,
              styles.whiteBorder,
              { flex: 1, margin: 5 },
            ]}
          >
            <Text
              style={[
                styles.font,
                styles.topLeftCorner,
                { fontSize: idSize[cardWidthPercent] },
              ]}
            >
              {id}
            </Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 15,
              }}
            >
              <View
                style={[
                  styles.ring,
                  {
                    width: '70%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                ]}
              >
                <View
                  style={[
                    styles.ring,
                    {
                      width: '90%',
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.ring,
                      {
                        width: '90%',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                      },
                    ]}
                  >
                    <Image
                      source={{ uri: sprites.animated.frontDefault }}
                      style={styles.image}
                    />
                  </View>
                </View>
              </View>
              <Text
                style={[
                  styles.font,
                  {
                    fontSize: nameSize[cardWidthPercent],
                    marginTop: 5,
                  },
                  !withProgessBar && { position: 'absolute', bottom: -20 },
                ]}
              >
                {capitalizeFirstLetter(name)}
              </Text>
            </View>
            {withProgessBar && (
              <ProgressBar
                currentValue={30}
                maxValue={100}
                fillColor={typeColors[0]}
              />
            )}
          </LinearGradient>
        </LinearGradient>
      )}
    </>
  );
};

export default PokemonCard;
