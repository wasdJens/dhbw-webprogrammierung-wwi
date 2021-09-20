/**
 * The following javascript snippet describes the basic of types and variables
 */

// In JS the variables dont have a set type - Instead they are set when assigned with a value
let input = "Foo";
input = 1337;

// Number
let number = 1337;
number = 42.42;

// BigInt Number
const largeNumber = 1234567890123456789012345678901234567890n;

// String
const aString = "Hello World";
const bString = 'Hello World';

// Concat Strings
const h = "Hello";
const w = "World";
console.log(h + " " + w); // Hello World

// Template Strings
const number = 800;
const price = `The price of the new phone is ${number};`
console.log(price) // The price of the new phone is 800;

// Template Strings
const phone = 800;
const discount = 25;
const price = `The price of the new phone is ${phone - ((phone / 100) * discount)}`;
console.log(price) // The price of the new phone is 600

// Template Strings
const phone = 800;
const discount = 25;
const price = `The price of the new phone is ${phone} with a discount of ${discount}`;
console.log(price); // The price of the new phone is 800 with a discount of 25

// Boolean type
const confirmed = false;
const approved = true;

// Null type
const username = null;

// undefined type
const username;
console.log(username) // undefined

// Object definition
const user = {
  name: "Jens",
  age: 25,
  gender: "m",
  isAdmin: true
}

const phone = {
  manufacturer: "Apple",
  model: "iPhone",
  storage: 128,
  isReleased: false
}

// Access a value of a object
console.log(user.name) // => Jens

// Add a new propery to the phone object
let machine = {
  serialNo: 1234,
  name: "Fast Machine"
}
machine.price = 2500;
console.log(machine); // Object { serialNo: 1234, name: "Fast Machine", price: 2500 }

// Remove a property
delete machine.price
console.log(machine); // Object { serialNo: 1234, name: "Fast Machine" }

// Assign a new value to serialNo
machine.serialNo = 42;
console.log(machine); // Object { serialNo: 42, name: "Fast Machine" }

// Multi Word Property
let factory = {
  "construction site": "Heidenheim an der Brenz"
};
console.log(factory); // Object { "construction site": "Heidenheim an der Brenz" }

// Access a multi word property
console.log(factory["construction site"]); // Heidenheim an der Brenz

// Square bracket notation as variables
const key = "construction site"
console.log(factory[key]); // Heidenheim an der Brenz

// Square bracket notation to define keys inside an object

const fruit = "apple";
const bag = {
  [fruit]: 5
}
console.log(bag); // Object { apple: 5 }

// Typeof operator
const price = 25;
console.log(typeof price); // number
console.log(typeof "Foo"); // string
console.log(typeof null); // object