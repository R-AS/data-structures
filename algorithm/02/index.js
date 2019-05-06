/**
 * 阶乘
 * @author zjy 2019.5.5
 * input: 1, 2, 3
 * output: 1, 1 * 2, 1 * 2 * 3
 */

function factorialize(num) {
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;

  return (num * factorialize(num - 1));
}

console.log(factorialize(5));