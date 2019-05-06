/**
 * 回文
 * @author zjy 2019.5.5
 * input: never odd or even
 * output: true  
 */
function palindrome(str) {
  if (typeof str !== 'string') return false;
  var newStr = str.replace(/[^a-zA-Z0-9]/g, '');//[^a-z]表示的是反义字符组,即匹配不是a-z的字符
  return newStr === newStr.split('').reverse().join('');
}

console.log(palindrome('never odd or even'));