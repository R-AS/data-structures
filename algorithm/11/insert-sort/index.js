/**
 * 插入排序
 * 稳定性: 稳定
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(1)
 * 思路:
 *  1.从第一个元素开始,该元素可以认为已经被排序;
 *  2.取下一个元素,在已经排序的元素序列中从后向前扫描;
 *  3.如果该元素(已排序)大于新元素,该元素移到下一个位置.
 */

const array = [3, 7, 6, 4, 8, 5];

const insertSort = arr => {
  const len = arr.length;
  let temp;

  for (let i = 1; i < len; i++) {
    temp = arr[i];
    for (let j = i; j > 0 && temp < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], temp];
    }
  }

  return arr;
}

console.log('插入排序');
console.log('排序前 ->', array);
console.log('排序后 ->', insertSort(array));