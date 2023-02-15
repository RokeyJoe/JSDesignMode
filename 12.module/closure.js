var testModule = (function() {
    var count = 0;
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        }
    }
})()

let test = testModule.decrement();
console.log(test) // -1
