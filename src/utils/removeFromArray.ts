const removeFromArray = <T>(array: T[], value: T): T[] => array.filter((element) => element !== value);

export default removeFromArray;
