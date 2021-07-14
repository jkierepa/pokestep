import {
  startLocationUpdatesAsync,
  Accuracy,
  LocationObject,
} from 'expo-location';
import { defineTask } from 'expo-task-manager';

import { store } from '../../store/store';
import { addCoords } from '../../store/coordinate/slice';

import {
  LOCATION_TIME_INTERVAL,
  LOCATION_BACKGROUND_TRACKING,
  NOTIFICATION_TITLE,
  NOTIFICATION_BODY,
} from '../../constants';

const startLocationTracking = async (
  locationPermStatus: boolean,
): Promise<void> => {
  if (locationPermStatus) {
    await startLocationUpdatesAsync(LOCATION_BACKGROUND_TRACKING, {
      accuracy: Accuracy.High,
      deferredUpdatesInterval: LOCATION_TIME_INTERVAL,
      distanceInterval: 1,
      foregroundService: {
        notificationTitle: NOTIFICATION_TITLE,
        notificationBody: NOTIFICATION_BODY,
      },
    });
    console.log('[BACKGROUND TRACKING] - STARTED');
  }
};

type LocationData = {
  locations: LocationObject[];
};

defineTask(LOCATION_BACKGROUND_TRACKING, (body) => {
  if (body.error) {
    console.log('[BACKGROUND TRACKING - ERR]', body.error);
  }
  if ('locations' in body.data) {
    const locationData = body.data as LocationData;
    const [localization] = locationData.locations;

    if (localization?.coords.speed) {
      store.dispatch(
        addCoords({
          latitude: localization.coords.latitude,
          longitude: localization.coords.longitude,
        }),
      );
    }
  }
});

export default startLocationTracking;
