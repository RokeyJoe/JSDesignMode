// ES6 实现单例模式
class Singleton {
    constructor(name,age) {
        if(!Singleton.instance) {
            this.name = name;
            this.age = age;
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}


let v1 = new Singleton('Joe', 18);
let v2 = new Singleton('Mike', 38);

console.log(v1) // Singleton { name: 'Joe', age: 18 }
console.log(v2)  // Singleton { name: 'Joe', age: 18 }
console.log(v1 === v2); // true 
console.log(new Singleton() === new Singleton()); // true 
