// 给js对象添加迭代器，让对象也可以使用 for...of
var obj = { a: 1, b: 2 };

Object.prototype[Symbol.iterator] = function () {
    const keys = Object.keys(this);
    let index = 0;

    return {
        next: () => {
            return {
                value: this[keys[index++]], // 每次迭代的结果
                done: index > keys.length // 迭代结束标识 false停止迭代，true继续迭代
            };
        }
    }
}

for (let n of obj) {
    console.log(n);
    /**
     * 1
     * 2
     */
}