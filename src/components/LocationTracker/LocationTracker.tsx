import React, { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/store';
import { resetCoords } from '../../store/coordinate/slice';
import calculateDistance from '../../utils/calculateDistance';

import Button from '../Button';
import useLocationPermissions from '../../hooks/useLocationPermissions';
import startLocationTracking from '../../infrastructure/locationTracking/startLocationTracking';
import stopLocationTracking from '../../infrastructure/locationTracking/stopLocationTracking';
import {
  SEARCH_BUTTON_START_TEXT,
  SEARCH_BUTTON_STOP_TEXT,
} from '../../constants';
import { updateDistance } from '../../store/distance/slice';

const LocationTracker = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const coords = useAppSelector((state) => state.coordinate);

  const locationPermStatus = useLocationPermissions();

  useEffect(() => {
    if (coords.prevLat !== 0 && coords.prevLon !== 0) {
      const distance = calculateDistance(
        coords.currLat,
        coords.currLon,
        coords.prevLat,
        coords.prevLon,
      );
      dispatch(updateDistance(distance));
      console.log(distance);
    }
  }, [coords]);

  const handlePress = () => {
    if (isSearching) {
      stopLocationTracking(locationPermStatus);
      setIsSearching(false);
      dispatch(resetCoords());
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
