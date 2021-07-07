import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import * as ExpoLocation from 'expo-location';
import { defineTask } from 'expo-task-manager';

import {
  LOCATION_TIME_INTERVAL,
  LOCATION_BACKGROUND_TRACKING,
} from 'src/constants';
import checkLocationPermissions from './checkLocationPermissions';

const LocationTracker = () => {
  const [text, setText] = useState<string>('TEST TEXT FOR LOCATION TRACKER');

  useEffect(() => {
    (async () => {
      const areGranted = await checkLocationPermissions();
      if (areGranted) {
        await ExpoLocation.startLocationUpdatesAsync(
          LOCATION_BACKGROUND_TRACKING,
          {
            accuracy: ExpoLocation.Accuracy.Balanced,
            timeInterval: LOCATION_TIME_INTERVAL,
          },
        );
      } else {
        setText('PERMISSIONS NOT GRANTED');
      }
    })();
  }, []);

  return <Text>{text}</Text>;
};

defineTask(LOCATION_BACKGROUND_TRACKING, ({ data, error }) => {
  if (error) {
    console.log('err', error);
  }
  if (data) {
    console.log('data', data);
  }
});

export default LocationTracker;
