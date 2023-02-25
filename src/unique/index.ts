export const es5UniqueArray = <T>(arr: T[]): T[] => {
  return arr.filter((u, i) => arr.indexOf(u) === i);
};

export const es6UniqueArray = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};
