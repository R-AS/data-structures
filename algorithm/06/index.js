/**
 * 返回数组中最大的数
 * @author zjy 2019.5.6
 * input: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]
 * output: [5, 27, 39, 1001]
 */

function largestOfFour(arr) {
  var newArr = [];  //存储最大项
  //匹配每一项,若每一项为数组时,递归
  arr.forEach(function(ele) {
    if (typeof ele === 'object') {
      getMax(ele);
    }
  });

  //获取数组最大项
  function getMax(arr) {
    newArr.push(
      arr.sort(function(a, b) {
      return b - a;
    })[0]);
  } 
  return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));