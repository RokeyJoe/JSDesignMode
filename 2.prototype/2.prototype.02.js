class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 原型模式, 在class中say() 会被添加到Employee.prototype上
    say() {
        console.log(this.name + ' - ' + this.age);
    }

}

var employee = new Employee('Joe', 26);
console.log('employee: ', employee);
employee.say();
