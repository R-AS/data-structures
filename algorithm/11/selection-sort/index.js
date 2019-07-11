/**
 * 排序算法
 * 稳定性: 稳定
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(1)
 * 思路:
 *  1.在未排序序列中找到最小(大)元素,存放到排序序列的起始位置;
 *  2.再从剩余未排序元素中继续寻找最小(大)元素,然后放到已排序序列的末尾.
 */

const array = [3, 7, 6, 4, 8, 5];

const selectionSort = arr => {
  const len = arr.length;
  let min;
  
  for (let i = 0; i < len - 1; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

console.log('选择排序');
console.log('排序前 ->', array);
console.log('排序后 ->', selectionSort(array));