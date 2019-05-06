/**
 * 找最长的单词
 * @author zjy 2019.5.6
 * input: The quick brown fox jumped over the lazy dog
 * output: jumped
 */

function findLongestWord(str) {
  var arr = str.split(' ');

  return arr.sort(function(a, b) {  //a - b < 0,a前b后; b - a > 0,b前a后
    return b.length - a.length;
  })[0];
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));