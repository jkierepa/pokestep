import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { store } from '@store/store';
import HomeScreen from '@screens/Home/HomeScreen';
import EggScreen from '@screens/Egg/EggScreen';
import { RootStackParamList } from '@navTypes';
import StorageHandler from '@components/StorageHandler/StorageHandler';
import defaultTheme from '@theme/theme';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <StorageHandler />
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Egg" component={EggScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}
