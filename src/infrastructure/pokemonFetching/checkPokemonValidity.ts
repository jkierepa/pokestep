import { VALID_GENERATIONS } from '@constants';

const checkPokemonValidity = async (id: number): Promise<boolean> => {
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
  const resp = await fetch(speciesUrl);
  const speciesData = await resp.json();

  if (speciesData.evolves_from_species) return false;
  if (!VALID_GENERATIONS.includes(speciesData.generation.name)) return false;
  return true;
};

export default checkPokemonValidity;
