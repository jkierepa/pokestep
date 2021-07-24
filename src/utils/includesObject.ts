// interface IncludesObject {
//   <Type>(targetKey: string, targetValue: string, array: StringIndex<Type>[]): boolean;
//   <Type>(targetKey: string, targetValue: number, array: StringIndex<Type>[]): boolean;
//   <Type>(targetKey: string, targetValue: boolean, array: StringIndex<Type>[]): boolean;
// }

// type StringIndex<T> = {[key: string]: T}

// const includesObject: IncludesObject = <Type>(
//   targetKey: string,
//   targetValue: string | number | boolean,
//   array: StringIndex<Type>[],
// ): boolean => {
//   const filteredObjects = array.filter((element: StringIndex<Type>) => {
//     const element[targetKey]: typeof targetValue
//     if (element[targetKey] === targetValue)
//     // kurwa co za gowno (ts7053) ??!??!!?!?!
//     // if( element[key: keyof Type] === targetValue) {
//   });
// };

// export default includesObject;
