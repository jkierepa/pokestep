import { LOCATION_TIME_INTERVAL } from '../constants';

const checkDistance = (distance: number): number => {
  const timeIntervalSec = LOCATION_TIME_INTERVAL / 1000;

  if (distance > 8.5 * timeIntervalSec) return 0;
  if (distance < 1 * timeIntervalSec) return 0;
  return distance;
};

export default checkDistance;
