import React, { useState } from 'react';

import Button from '@components/Button';
import fetchPokemon from '@infrastructure/pokemonFetching/fetchPokemon';
import getPokemonId from '@infrastructure/pokemonFetching/getPokemonId';
import { PokemonBasic } from '@types';
import PokemonCard from '@components/PokemonCard/PokemonCard';

const Fetcher = () => {
  const [pokemonDisplay, setPokemonDisplay] = useState<
  PokemonBasic | undefined
  >(undefined);

  const onPressHandler = () => {
    (async () => {
      const id = await getPokemonId();
      const pokemon = await fetchPokemon(id);
      if (pokemon) setPokemonDisplay(pokemon);
    })();
  };

  return (
    <>
      <Button text="FETCH TEST" onPress={onPressHandler} />
      {pokemonDisplay && (
        <PokemonCard
          name={pokemonDisplay.name}
          id={pokemonDisplay.id}
          sprites={pokemonDisplay.sprites}
          types={pokemonDisplay.types}
          cardWidthPercent={40}
        />
      )}
    </>
  );
};

export default Fetcher;
