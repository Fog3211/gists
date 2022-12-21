export const debounce = <T extends Function>(fn: T, ms: number) => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args: any[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
};

export const throttle = <T extends Function>(fn: T, ms: number) => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return (...args: any[]) => {
    if (timer) {
      return;
    } else {
      fn.apply(this, args);
      timer = setTimeout(() => {
        timer = undefined;
      }, ms);
    }
  };
};
