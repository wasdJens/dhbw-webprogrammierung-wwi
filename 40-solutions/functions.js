const add = (value1, value2) => value1 + value2;
const multiply = (value1, value2) => value1 * value2;

function calc(value1, value2, fn) {
  return fn(value1, value2);
}

const result = calc(10, 20, add);
const result2 = calc(10, 20, multiply);
console.log(result);
console.log(result2);