import React from 'react';

import Button from '@components/Button';
import fetchPokemon from '@infrastructure/pokemonFetching/fetchPokemon';
import getPokemonId from '@infrastructure/pokemonFetching/getPokemonId';

const Fetcher = () => {
  const onPressHandler = () => {
    (async () => {
      const id = await getPokemonId();
      fetchPokemon(id);
    })();
  };

  return <Button text="FETCH TEST" onPress={onPressHandler} />;
};

export default Fetcher;
