function insertionSort(arr: number[]) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    var key = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

export const bucketSort = (data: number[]) => {
  let min = Math.min(...data);
  let max = Math.max(...data);

  let bucketSize = 5;
  let count = Math.floor((max - min) / bucketSize) + 1;
  let buckets: number[][] = Array.from<number[]>({ length: count }).fill([]);

  for (let i = 0; i < data.length; i++) {
    buckets[Math.floor((data[i] - min) / bucketSize)].push(data[i]);
  }

  const res: number[] = [];

  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);
    for (var j = 0; j < buckets[i].length; j++) {
      res.push(buckets[i][j]);
    }
  }

  return res;
};
