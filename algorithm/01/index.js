/**
 * 反转整数
 * @author zjy 2019.5.5
 * input: 123, 120, -123
 * output: 321, 12, -321
 */

function reverseInteger(num) {
  var numStr = String(num); //将数字转换为字符串
  if (numStr.length > 32) return false; //若大于32位,返回false
  if (numStr.charAt(0) === '-') {   //判断是否是字符串
    numStr = numStr.substr(1, numStr.length - 1); //去除负号
    return parseInt('-' + numStr.split('').reverse().join(''));
  } else {
    return parseInt(numStr.split('').reverse().join(''));
  }
}

var num = reverseInteger(-120);
console.log(num);