import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Egg: undefined;
  Backpack: undefined;
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
