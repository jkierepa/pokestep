import { stopLocationUpdatesAsync } from 'expo-location';

import { LOCATION_BACKGROUND_TRACKING } from '../../constants';

const stopLocationTracking = async (
  locationPermStatus: boolean,
): Promise<void> => {
  if (locationPermStatus) {
    await stopLocationUpdatesAsync(LOCATION_BACKGROUND_TRACKING);
  }
};

export default stopLocationTracking;
