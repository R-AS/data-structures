/**
 * 快速排序
 * 稳定性: 不稳定
 * 时间复杂度: 最好情况 -> O(nlogn) 最坏情况 -> O(n^2) 
 * 空间复杂度: O(logn)
 * 思路:
 *  1.挑选基准值
 *  2.把比基准值小的放在左边,比基准值大的放在右边
 *  3.递归合并
 */
const array = [3, 7, 6, 4, 8, 5];

const quickSort = arr => {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  } 

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log('快速排序:');
console.log('排序前 ->', array);
console.log('排序后 ->', quickSort(array));