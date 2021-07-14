const getRandArrayElem = <T>(array: T[]): T => {
  const elem = array[Math.floor(Math.random() * array.length)];
  return elem;
};

export default getRandArrayElem;
