import { concurrentRequest } from './index';

const urls: string[] = [];
for (let i = 1; i <= 20; i++) {
  urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`);
}

test('normal concurrent request', () => {
  concurrentRequest(urls, 3).then((res) => {
    expect(res.length).toBe(20);
  });
});

test('empty concurrent request', () => {
  concurrentRequest([], 5).then((res) => {
    expect(res.length).toBe(0);
  });
});
