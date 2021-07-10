import React, { useState, useEffect } from 'react';

import {
  startLocationUpdatesAsync,
  Accuracy,
  LocationObject,
  getCurrentPositionAsync,
} from 'expo-location';
import { defineTask } from 'expo-task-manager';

import Button from '@components/Button';

import {
  LOCATION_TIME_INTERVAL,
  LOCATION_BACKGROUND_TRACKING,
} from '@constants';
import checkLocationPermissions from './checkLocationPermissions';

const LocationTracker = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [currLocation, setCurrLocation] = useState<LocationObject>();

  useEffect(() => {
    (async () => {
      const initLocation = await getCurrentPositionAsync();
      setCurrLocation(initLocation);

      const areGranted = await checkLocationPermissions();
      if (areGranted) {
        await startLocationUpdatesAsync(LOCATION_BACKGROUND_TRACKING, {
          accuracy: Accuracy.Balanced,
          timeInterval: LOCATION_TIME_INTERVAL,
          distanceInterval: 1,
          foregroundService: {
            notificationTitle: 'Searching pokemon near your location!',
            notificationBody: 'NOTIFICATION BODY WIP ',
          },
        });
        setIsSearching(true);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(currLocation);
  }, [currLocation]);

  return isSearching ? <Button /> : <Button />;
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
