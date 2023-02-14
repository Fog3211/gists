/**
 * 冒泡排序
 */

export const bubbleSort = (data: number[]) => {

  for (let i = 0; i < data.length - 1; i++) {
    let flag = true
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        const temp = data[j + 1]
        data[j + 1] = data[j]
        data[j] = temp
        flag = false
      }
    }
    if (flag) break
  }

  return data
}