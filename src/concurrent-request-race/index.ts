import axios from 'axios';

export const concurrentRequestRace = (urls: string[], max: number): Promise<unknown[]> => {
  return new Promise(async (resolve) => {
    const result: unknown[] = [];
    const pool: Promise<unknown>[] = [];

    if (urls.length === 0 || max <= 0) {
      return resolve(result);
    }

    const request = (currentIndex: number) => {
      const url: string = urls[currentIndex];
      const req = axios
        .get(url)
        .then((res) => res.data)
        .then((res) => {
          result[currentIndex] = res;
        })
        .catch((err) => {
          result[currentIndex] = err;
        })
        .finally(() => {
          const index = pool.indexOf(req);
          pool.splice(index, 1);
        });
      pool.push(req);
    };

    for (let i = 0; i < urls.length; i++) {
      request(i);
      if (pool.length >= max) {
        await Promise.race(pool);
      }
    }

    await Promise.all(pool);

    resolve(result);
  });
};
