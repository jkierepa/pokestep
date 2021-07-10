import { useEffect, useState } from 'react';

import {
  requestForegroundPermissionsAsync,
  requestBackgroundPermissionsAsync,
} from 'expo-location';

const useLocationPermissions = () => {
  const [areGranted, setAreGranted] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const foregroundPerm = await requestForegroundPermissionsAsync();
      const backgroundPerm = await requestBackgroundPermissionsAsync();
      if (
        foregroundPerm.status === 'granted'
        && backgroundPerm.status === 'granted'
      ) {
        setAreGranted(true);
      }
    })();
  }, []);

  return areGranted;
};

export default useLocationPermissions;
