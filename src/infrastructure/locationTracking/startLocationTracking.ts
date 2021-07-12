import { startLocationUpdatesAsync, Accuracy } from 'expo-location';

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
      accuracy: Accuracy.Balanced,
      timeInterval: LOCATION_TIME_INTERVAL,
      distanceInterval: 1,
      foregroundService: {
        notificationTitle: NOTIFICATION_TITLE,
        notificationBody: NOTIFICATION_BODY,
      },
    });
  }
};

export default startLocationTracking;
