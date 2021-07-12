import { defineTask } from 'expo-task-manager';
import { LocationObject } from 'expo-location';

import { LOCATION_BACKGROUND_TRACKING } from '@constants';

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
