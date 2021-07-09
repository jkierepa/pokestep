import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import {
  startLocationUpdatesAsync,
  Accuracy,
  LocationObject,
} from 'expo-location';
import { defineTask } from 'expo-task-manager';

import { LOCATION_TIME_INTERVAL, LOCATION_BACKGROUND_TRACKING } from 'consts';
import checkLocationPermissions from './checkLocationPermissions';

const LocationTracker = () => {
  const [text, setText] = useState<string>('TEST TEXT FOR LOCATION TRACKER');
  useEffect(() => {
    (async () => {
      const areGranted = await checkLocationPermissions();
      if (areGranted) {
        await startLocationUpdatesAsync(LOCATION_BACKGROUND_TRACKING, {
          accuracy: Accuracy.Balanced,
          deferredUpdatesInterval: LOCATION_TIME_INTERVAL,
          distanceInterval: 1,
          foregroundService: {
            notificationTitle: 'Searching pokemon near your location!',
            notificationBody: 'NOTIFICATION BODY WIP ',
          },
        });
      } else {
        setText('PERMISSIONS NOT GRANTED');
      }
    })();
  }, []);

  return <Text>{text}</Text>;
};

type LocationData = {
  locations: LocationObject[];
};

defineTask(LOCATION_BACKGROUND_TRACKING, (body) => {
  if (body.error) {
    console.log('err', body.error);
  }
  if ('locations' in body.data) {
    const locationData = body.data as LocationData;
    const [localization] = locationData.locations;
    console.log(localization?.timestamp, localization.coords.latitude);
    console.log(localization?.timestamp, localization.coords.longitude);
  }
});

export default LocationTracker;
