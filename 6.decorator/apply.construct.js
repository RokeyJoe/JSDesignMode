/**
 * apply() 提供新的this值给当前调用的函数/方法。
 * 你可以使用apply来实现继承：写一个方法，然后让另一个新的对象来继承它
 * （而不是在新对象中再写一次这个方法）
 * */

//  使用apply来链接构造器
Function.prototype.construct = function (aArgs) {
  console.log("construct", this);
  console.log("prototype", this.prototype);
  let oNew = Object.create(this.prototype);

  this.apply(oNew, aArgs);
  return oNew;
};

function MyConstructor() {
  for (let nProp = 0; nProp < arguments.length; nProp++) {
    this["property" + nProp] = arguments[nProp];
  }
}

let myArray = [4, "Hello world", false];

let myInstance = MyConstructor.construct(myArray);

console.log(myInstance);
console.log(myInstance.property1);
console.log(myInstance instanceof MyConstructor);
console.log(myInstance.constructor);
