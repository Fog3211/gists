/**
 * 选择排序
 */
export const selectionSort = (data: number[]) => {
  for (let i = 0; i < data.length; i++) {
    let minIndex = i;
    for (let j = i; j < data.length; j++) {
      if (data[minIndex] > data[j]) {
        minIndex = j;
      }
    }
    const temp = data[i];
    data[i] = data[minIndex];
    data[minIndex] = temp;
  }

  return data;
};
