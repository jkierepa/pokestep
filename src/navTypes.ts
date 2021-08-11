import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Egg: undefined;
  Backpack: undefined;
  Pokeball: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Home'
>;
export type EggScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Egg'
>;
export type BackpackScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Backpack'
>;

export type PokeballScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Pokeball'
>;
