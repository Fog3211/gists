import axios from 'axios';

export const concurrentRequest = (urls: string[], max: number): Promise<unknown[]> => {
  return new Promise((resolve) => {
    const result: unknown[] = [];
    if (urls.length === 0 || max <= 0) {
      return resolve(result);
    }

    // 已完成的数量
    let finishCounts = 0;

    const request = (currentIndex: number) => {
      if (finishCounts > urls.length) return;
      const url: string = urls[currentIndex];
      axios
        .get(url)
        .then((res) => res.data)
        .then((res) => {
          result[currentIndex] = res;
        })
        .catch((err) => {
          result[currentIndex] = err;
        })
        .finally(() => {
          finishCounts++;
          if (finishCounts === urls.length) {
            resolve(result);
          } else {
            request(finishCounts);
          }
        });
    };

    for (let i = 0; i < Math.min(urls.length, max); i++) {
      request(i);
    }
  });
};
