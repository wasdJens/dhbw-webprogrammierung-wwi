// Simple function
function square(number) {
  return number * number;
}

console.log(square(5)); // 25

// Function parameter example pass by reference
var phone = {
  make: 'Apple',
  model: 'iPhone',
  year: '2021'
}

console.log(phone.year); // 2021

function updatePhone(phone) {
  phone.year = '1995';
}

updatePhone(phone);
console.log(phone.year); // 1995

// Function expressions
const square = function(number) {return number * number};
console.log(square(5)) // 25


// Function as parameter
const upperCase = function(value) { return value.toUpperCase()}

function transformUserInput(uppercase, input) {
  return upperCase(input);
}

console.log(transformUserInput(upperCase, "Hallo Welt")); // HALLO WELT

// Default Parameters
function addPrefix(input, prefix = 'id: ') {
  return `${prefix} ${input}`;
}
console.log(addPrefix('Test')); // id: Text
console.log(addPrefix('iPhone', 'unreleased')) // unreleased iPhone

// Arrow function
const sum = (a, b) => a + b;
console.log(sum(25, 10)); // 35 