import { useEffect } from 'react';

import {
  startLocationUpdatesAsync,
  Accuracy,
  LocationObject,
  stopLocationUpdatesAsync,
} from 'expo-location';
import { defineTask } from 'expo-task-manager';

import {
  LOCATION_TIME_INTERVAL,
  LOCATION_BACKGROUND_TRACKING,
  NOTIFICATION_TITLE,
  NOTIFICATION_BODY,
} from '@constants';

const useLocationTracking = (
  locationPermStatus: boolean,
  startSearching: boolean,
) => {
  useEffect(() => {
    (async () => {
      if (locationPermStatus && startSearching) {
        await startLocationUpdatesAsync(LOCATION_BACKGROUND_TRACKING, {
          accuracy: Accuracy.Balanced,
          timeInterval: LOCATION_TIME_INTERVAL,
          distanceInterval: 1,
          foregroundService: {
            notificationTitle: NOTIFICATION_TITLE,
            notificationBody: NOTIFICATION_BODY,
          },
        });
      }
      if (locationPermStatus && !startSearching) {
        await stopLocationUpdatesAsync(LOCATION_BACKGROUND_TRACKING);
      }
    })();
  }, [startSearching]);
};

export default useLocationTracking;

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
