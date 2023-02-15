/**
 * 1、保证一个类仅有一个实例， 并提供一个访问它的全局访问点
 * 2、主要解决一个全局使用的类频繁地创建和销毁，占用内存
 */

// ES5 使用闭包实现单例模式
var Singleton = (function(){
    var instance
    
    function User(name,age) {
        this.name = name;
        this.age = age;
    }

    return function(name,age) {
        if(!instance) {
            instance = new User(name,age);
        }
        return instance;
    }
})(); // () 不能少, 否则返回的是函数本身， 而不是instance


let v1 = Singleton('Joe', 18);
let v2 = Singleton('Mike', 38);

console.log(v1)
console.log(v2)
console.log(Singleton() === Singleton())
