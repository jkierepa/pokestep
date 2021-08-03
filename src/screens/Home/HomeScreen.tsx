import React from 'react';

import Fetcher from '@components/Fetcher/Fetcher';
import SafeArea from '@components/SafeArea/';
import LocationTracker from '@components/LocationTracker/';

const HomeScreen = () => (
  <SafeArea>
    <LocationTracker />
    <Fetcher />
  </SafeArea>
);

export default HomeScreen;
