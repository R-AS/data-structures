/**
 * 冒泡排序
 * 稳定性:稳定
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 * 思路: 比较相邻元素,若第一个比第二个大,则进行交换
 */

const array = [3, 7, 6, 4, 8, 5];

const bubbleSort  = arr => {
  const len = arr.length - 1;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log('冒泡排序:');
console.log('排序前 ->', array);
console.log('排序后 ->', bubbleSort(array));