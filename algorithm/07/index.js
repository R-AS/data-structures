/**
 * 判断字符串是否以指定的字符结尾
 * 判断字符串是否以指定的字符开头
 * @author zjy 2019.5.6 
 * input: He has to give me a new name, name
 * output: true
 * input: He has to give me a new name, He
 * output: true
 */

function confirmEnding(str, target) {
  return str.substr(-target.length) === target ? true : false;  //substr截取0到目标索引,负数从字串结尾的一个元素向左数起,-1,-2...
}

function confirmStarting(str, target) {
  return str.slice(0, target.length) === target ? true : false; //slice截取start到目标索引的前一个元素
}

console.log('判断结尾', confirmEnding('He has to give me a new name', 'name'));
console.log('判断开头', confirmStarting('He has to give me a new name', 'He'));