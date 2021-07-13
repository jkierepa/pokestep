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
  console.log('here?');
  if (locationPermStatus) {
    console.log('here2?');
    await startLocationUpdatesAsync(LOCATION_BACKGROUND_TRACKING, {
      accuracy: Accuracy.High,
      deferredUpdatesInterval: LOCATION_TIME_INTERVAL,
      distanceInterval: 1,
      foregroundService: {
        notificationTitle: NOTIFICATION_TITLE,
        notificationBody: NOTIFICATION_BODY,
      },
    });
  }
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

    if (localization?.coords.speed) {
      console.log('speed', localization.coords.speed);
      if (localization.coords.speed < 10) {
        store.dispatch(
          addCoords({
            latitude: localization.coords.latitude,
            longitude: localization.coords.longitude,
          }),
        );
      }
    }
  }
});

export default startLocationTracking;
