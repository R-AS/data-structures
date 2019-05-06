/**
 * 让字符串中每个单词首字母为大写
 * @author zjy 2019.5.6
 * input: I'm a little tea pot
 * output: I'm A Little Tea Pot
 */

function titleCase(str) {
  var arr = str.trim().split(' ');
  
  return arr.map(function(item) {
      return item.replace(item[0], item[0].toUpperCase());
    }).join(' ');
}

console.log(titleCase("I'm a little tea pot"));