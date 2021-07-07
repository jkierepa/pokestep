import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
