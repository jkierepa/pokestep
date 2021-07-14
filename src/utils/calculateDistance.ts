import checkDistance from './checkDistance';

const calculateDistance = (
  currLat: number,
  currLon: number,
  prevLat: number,
  prevLon: number,
): number => {
  const R = 6371e3;
  const prevPhi = (prevLat * Math.PI) / 180;
  const currPhi = (currLat * Math.PI) / 180;
  const changePhi = ((currLat - prevLat) * Math.PI) / 180;
  const changeLamdba = ((currLon - prevLon) * Math.PI) / 180;

  const a = Math.sin(changePhi / 2) * Math.sin(changePhi / 2)
    + Math.cos(prevPhi)
      * Math.cos(currPhi)
      * Math.sin(changeLamdba / 2)
      * Math.sin(changeLamdba / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return checkDistance(distance);
};

export default calculateDistance;
