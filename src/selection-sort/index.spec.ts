import { selectionSort } from './index';

describe('selectionSort', () => {
  test('should return empty array when input is empty array', () => {
    expect(selectionSort([])).toEqual([]);
  });

  test('should return sorted array when input is unsorted array', () => {
    expect(selectionSort([3, 1, 4, 5, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return same array when input is already sorted array', () => {
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should return sorted array when input is array with duplicate numbers', () => {
    expect(selectionSort([3, 1, 4, 5, 2, 4])).toEqual([1, 2, 3, 4, 4, 5]);
    expect(selectionSort([5, 4, 3, 2, 1, 5])).toEqual([1, 2, 3, 4, 5, 5]);
    expect(selectionSort([1, 2, 3, 4, 5, 5])).toEqual([1, 2, 3, 4, 5, 5]);
  });
});
