import {
  requestForegroundPermissionsAsync,
  requestBackgroundPermissionsAsync,
} from 'expo-location';

const checkLocationPermissions = async (): Promise<boolean> => {
  let areGranted = false;
  const foregroundPermissionResponse = await requestForegroundPermissionsAsync();
  const backgroundPermissionResponse = await requestBackgroundPermissionsAsync();
  if (
    foregroundPermissionResponse.status === 'granted'
    && backgroundPermissionResponse.status === 'granted'
  ) {
    areGranted = true;
  }

  return areGranted;
};

export default checkLocationPermissions;
