/**
 * 实现一个new
 * 思路:
 * 1.创建一个新对象obj
 * 2.把obj的_proto_指向Dog.prototype实现继承
 * 3.执行构造函数,传递参数,改变this指向Dog.call(obj, ...args)
 * 4.返回obj
 */

var Dog = function(name) {
  this.name = name;
}
Dog.prototype.bark = function() {
  console.log('wang');
}
Dog.prototype.sayName = function() {
  console.log('my name is', this.name);
}

var xiaobai = new Dog('小白');
xiaobai.sayName();
xiaobai.bark();

//实现new
var _new = function() {
  var constructor = Array.prototype.shift.call(arguments);  //Dog
  var args = arguments;
  const obj = new Object();
  obj.__proto__ = constructor.prototype;
  constructor.call(obj, ...args);
  return obj;
}

var xiaohei = _new(Dog, '小黑');
xiaohei.bark();
xiaohei.sayName();

console.log(Dog.prototype);
console.log(xiaobai);
console.log(xiaohei);
console.log(xiaohei instanceof Dog);