import React, { useEffect } from 'react';
import { Text } from 'react-native';

import * as ExpoLocation from 'expo-location';
import { defineTask } from 'expo-task-manager';

import {
  LOCATION_TIME_INTERVAL,
  LOCATION_BACKGROUND_TASK_NAME,
} from 'src/constants';

const LocationTracker = () => {
  // const [location, setLocation] = useState<ExpoLocation.LocationObject>();

  useEffect(() => {
    (async () => {
      const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        await ExpoLocation.startLocationUpdatesAsync(
          LOCATION_BACKGROUND_TASK_NAME,
          {
            accuracy: ExpoLocation.Accuracy.Balanced,
            timeInterval: LOCATION_TIME_INTERVAL,
          },
        );
      }
    })();
  }, []);

  // let text = 'dupadupa';

  // if (location) {
  //   text = JSON.stringify(location);
  // }

  return <Text>TEST TEXT FOR LOCATION</Text>;
};

defineTask(LOCATION_BACKGROUND_TASK_NAME, ({ data, error }) => {
  if (error) {
    // console.log('ERROR:', error);
    return;
  }
  if (data) {
    // const { locations } = data;
    // console.log('from background', locations);
  }
});

export default LocationTracker;
