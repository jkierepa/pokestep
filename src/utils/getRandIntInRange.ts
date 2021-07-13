/**
 * Returns number in not inclusive range
 */

const getRandIntInRange = (rangeStart: number, rangeStop: number): number => {
  const random = Math.random() * (rangeStop - rangeStart) + rangeStart;
  return Math.floor(random);
};

export default getRandIntInRange;
