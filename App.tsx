import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import LocationTracker from './src/components/LocationTracker/LocationTracker';

export default function App() {
  return (
    <SafeAreaView>
      <LocationTracker />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
