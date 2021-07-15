import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components/native';
import HomeScreen from '@screens/Home/HomeScreen';
import { store } from './src/store/store';

import defaultTheme from './src/theme/theme';

import StorageHandler from './src/components/StorageHandler/StorageHandler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <StorageHandler />
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}
