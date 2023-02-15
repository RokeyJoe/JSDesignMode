function Employee(name,age) {
    this.name = name;
    this.age = age;
    this.say = function() {
        console.log(this.name + ' - ' + this.age);
    }
}

var employee = new Employee('Joe', 26);
console.log('employee: ', employee);
employee.say();
