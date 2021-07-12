import React, { useState, useEffect } from 'react';

import { LocationObject, getCurrentPositionAsync } from 'expo-location';

import Button from '../Button';
import useLocationPermissions from '../../hooks/useLocationPermissions';
import startLocationTracking from '../../infrastructure/locationTracking/startLocationTracking';
import stopLocationTracking from '../../infrastructure/locationTracking/stopLocationTracking';
import {
  SEARCH_BUTTON_START_TEXT,
  SEARCH_BUTTON_STOP_TEXT,
} from '../../constants';

const LocationTracker = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [currLocation, setCurrLocation] = useState<LocationObject>();

  const locationPermStatus = useLocationPermissions();

  useEffect(() => {
    (async () => {
      const initLocation = await getCurrentPositionAsync();
      setCurrLocation(initLocation);
    })();
  }, []);

  useEffect(() => {
    console.log('currLoc', currLocation);
  }, [currLocation]);

  const handlePress = () => {
    if (isSearching) {
      stopLocationTracking(locationPermStatus);
      setIsSearching(false);
    } else {
      startLocationTracking(locationPermStatus);
      setIsSearching(true);
    }
  };

  return (
    <Button
      onPress={handlePress}
      text={isSearching ? SEARCH_BUTTON_STOP_TEXT : SEARCH_BUTTON_START_TEXT}
    />
  );
};

export default LocationTracker;
