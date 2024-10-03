const car = require('./library');
const lib2 = require('./library2');

console.log(car); // { brand: 'Mercedes', model: 'S' }

console.log(lib2.something); // Test
console.log(lib2.doSomething('Mercedes')); // Mercedes