import car from "./library.mjs";
import lib2 from "./library2.mjs";

console.log(car); // { brand: 'Mercedes', model: 'S' }

console.log(lib2.something); // Test
console.log(lib2.doSomething('Mercedes')); // Mercedes