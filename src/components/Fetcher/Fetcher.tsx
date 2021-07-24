import React, { useState } from 'react';
import { Image } from 'react-native';

import Button from '@components/Button';
import fetchPokemon from '@infrastructure/pokemonFetching/fetchPokemon';
import getPokemonId from '@infrastructure/pokemonFetching/getPokemonId';

const Fetcher = () => {
  const [pokemonDisplay, setPokemonDisplay] = useState<string>();

  const onPressHandler = () => {
    (async () => {
      const id = await getPokemonId();
      const pokemon = await fetchPokemon(id);
      setPokemonDisplay(pokemon.sprites.animated.frontDefault);
    })();
  };

  return (
    <>
      <Button text="FETCH TEST" onPress={onPressHandler} />
      {pokemonDisplay && (
        <Image
          source={{ uri: pokemonDisplay }}
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
        />
      )}
    </>
  );
};

export default Fetcher;
