import { EggType, PokemonType } from '@types';
import bug from '@assets/egg/eggBug.png';
import dark from '@assets/egg/eggDark.png';
import common from '@assets/egg/eggCommon.png';
import dragon from '@assets/egg/eggDragon.png';
import electric from '@assets/egg/eggElectric.png';
import fairy from '@assets/egg/eggFairy.png';
import fighting from '@assets/egg/eggFighting.png';
import fire from '@assets/egg/eggFire.png';
import flying from '@assets/egg/eggFlying.png';
import ghost from '@assets/egg/eggGhost.png';
import ground from '@assets/egg/eggGround.png';
import grass from '@assets/egg/eggGrass.png';
import ice from '@assets/egg/eggIce.png';
import normal from '@assets/egg/eggNormal.png';
import plant from '@assets/egg/eggPlant.png';
import water from '@assets/egg/eggWater.png';
import white from '@assets/egg/eggWhite.png';
import steel from '@assets/egg/eggSteel.png';
import rock from '@assets/egg/eggRock.png';
import psychic from '@assets/egg/eggPsychic.png';
import poison from '@assets/egg/eggPoison.png';
import gold from '@assets/egg/eggGold.png';

export const LOCATION_TIME_INTERVAL = 5000;
export const LOCATION_BACKGROUND_TRACKING = 'location-background-tracking';

export const NOTIFICATION_TITLE = 'Searching pokemon near your location!';
export const NOTIFICATION_BODY = 'BODY WIP';

export const SEARCH_BUTTON_START_TEXT = 'START SEARCHING';
export const SEARCH_BUTTON_STOP_TEXT = 'STOP SEARCHING';

export const THRESHOLD_METERS_MIN = 5;
export const THRESHOLD_METERS_MAX = 10;

export const LAST_POKEMON_ID = 493;
export const EGG_GROUPS_API = 'https://pokeapi.co/api/v2/egg-group/';

export const VALID_VERSION_GROUPS = [
  'red-blue',
  'yellow',
  'gold-silver',
  'crystal',
  'ruby-sapphire',
  'emerald',
];

export const VALID_GENERATIONS = [
  'generation-i',
  'generation-ii',
  'generation-iii',
];

export const POKEMON_TYPE_COLORS = {
  bug: '#bae05f',
  dark: '#8e8c94',
  dragon: '#88a2e8',
  fairy: '#fdb9e9',
  fighting: '#da7589',
  fire: '#ffb971',
  flying: '#bbc9e4',
  electric: '#ffe662',
  ghost: '#8291e0',
  plant: '#a8ff98',
  grass: '#a8ff98',
  ground: '#e69a74',
  normal: '#dcdcdc',
  poison: '#d6a2e4',
  psychic: '#ffa5da',
  rock: '#C9BB8A',
  steel: '#9fb8b9',
  water: '#8cc4e2',
  ice: '#8cf5e4',
  default: '#ffffff',
};

export const EGG_TYPES: EggType[] = [
  'eggBug',
  'eggDark',
  'eggDragon',
  'eggFairy',
  'eggFighting',
  'eggFire',
  'eggFlying',
  'eggElectric',
  'eggGhost',
  'eggPlant',
  'eggGrass',
  'eggGround',
  'eggNormal',
  'eggPoison',
  'eggPsychic',
  'eggRock',
  'eggSteel',
  'eggWater',
  'eggIce',
  'eggCommon',
  'eggWhite',
];

// export const EGG_IMAGES: EggImage[] = [
//   { eggBug: bug },
//   { eggDark: dark },
//   { eggCommon: common },
//   { eggDragon: dragon },
//   { eggElectric: electric },
//   { eggFairy: fairy },
//   { eggFighting: fighting },
//   { eggFire: fire },
//   { eggFlying: flying },
//   { eggGhost: ghost },
//   { eggGrass: grass },
//   { eggGold: gold },
//   { eggGround: ground },
//   { eggIce: ice },
//   { eggNormal: normal },
//   { eggPlant: plant },
//   { eggWater: water },
//   { eggWhite: white },
//   { eggSteel: steel },
//   { eggRock: rock },
//   { eggPsychic: psychic },
//   { eggPoison: poison },
// ];

export const EGG_IMAGES = {
  eggBug: bug,
  eggDark: dark,
  eggCommon: common,
  eggDragon: dragon,
  eggElectric: electric,
  eggFairy: fairy,
  eggFighting: fighting,
  eggFire: fire,
  eggFlying: flying,
  eggGhost: ghost,
  eggGrass: grass,
  eggGold: gold,
  eggGround: ground,
  eggIce: ice,
  eggNormal: normal,
  eggPlant: plant,
  eggWater: water,
  eggWhite: white,
  eggSteel: steel,
  eggRock: rock,
  eggPsychic: psychic,
  eggPoison: poison,
};

type EggToType = { [key in EggType]: PokemonType };

export const EGG_TO_TYPE: EggToType = {
  eggBug: 'bug',
  eggDark: 'dark',
  eggCommon: 'normal',
  eggDragon: 'dragon',
  eggElectric: 'electric',
  eggFairy: 'fairy',
  eggFighting: 'fighting',
  eggFire: 'fire',
  eggFlying: 'flying',
  eggGhost: 'ghost',
  eggGrass: 'grass',
  eggGold: 'gold',
  eggGround: 'ground',
  eggIce: 'ice',
  eggNormal: 'normal',
  eggPlant: 'plant',
  eggWater: 'water',
  eggWhite: 'white',
  eggSteel: 'steel',
  eggRock: 'rock',
  eggPsychic: 'psychic',
  eggPoison: 'poison',
};
