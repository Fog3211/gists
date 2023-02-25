export const myTypeof = (data: unknown) => {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};
