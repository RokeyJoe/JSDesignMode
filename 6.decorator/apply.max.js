// 找出数组中最大/小的数字
const numbers = [5, 6, 7, 8, 9];

// 使用Math.min/Math.max以及apply函数时的代码
const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);

console.log("max: ", max);
console.log("min: ", min);

// 对比：简单循环算法
(max = -Infinity), (min = +Infinity);

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
  if (numbers[i] < min) min = numbers[i];
}
