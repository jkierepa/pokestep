import React, { useState } from 'react';

import Fetcher from '@components/Fetcher/Fetcher';
import SafeArea from '@components/SafeArea/';
import LocationTracker from '@components/LocationTracker/';
import CircularProgress from '@components/CircularProgress/CircularProgress';
import DonutProgress from '@components/DonutProgress/DonutProgress';
import Button from '@components/Button';

const HomeScreen = () => {
  const [per, setPer] = useState<number>(0);
  return (
    <SafeArea>
      <Button onPress={() => setPer(per + 1)} />
      <CircularProgress percentage={70} />
      <DonutProgress currentValue={per} />
      <LocationTracker />
      <Fetcher />
    </SafeArea>
  );
};

export default HomeScreen;
