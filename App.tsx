import React from 'react';

import { StatusBar } from 'expo-status-bar';

import SafeArea from './src/components/SafeArea/SafeArea';
import LocationTracker from './src/components/LocationTracker/LocationTracker';

export default function App() {
  return (
    <SafeArea>
      <LocationTracker />
      <StatusBar style="auto" />
    </SafeArea>
  );
}
