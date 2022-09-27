const cars = ['Mercedes', 'Audi', 'BMW', 'Volkswagen'];

console.log(cars[2]) // BMW
console.log(cars['length']) // 4

const randomArray = ['Hallo Welt', 25, {name: 'Jens', age: '25'}, false];
console.log(randomArray);

/**
 * Basic Array Methods
 */

// Add a new element to the end
const cars = ['Mercedes'];
cars.push('Audi');
console.log(cars); // Array [ "Mercedes", "Audi" ]

// Remove the last element
const cars = ['Mercedes', 'Audi'];
cars.pop();
console.log(cars); // Array [ "Mercedes" ]

// Remove the first element and return it
const cars = ['Mercedes', 'Audi', 'BMW', 'Volkswagen'];
const car = cars.shift();
console.log(car) // Mercedes
console.log(cars.length) // 3

// Add an element to the beginning
const cars = ['Mercedes'];
cars.unshift('Audi');
console.log(cars); // Array [ "Audi", "Mercedes" ]

/**
 * Array loops
 */

const cars = ['Mercedes', 'Audi', 'BMW', 'Volkswagen'];
for (let i = 0; i <= cars.length; i++) {
  console.log(cars[i]); // Mercedes, Audi, Bmw, Volkswagen
}

const cars = ['Mercedes', 'Audi', 'BMW', 'Volkswagen'];
for (let car of cars) {
  console.log(car) // Mercedes, Audi, Bmw, Volkswagen
}

const cars = ['Mercedes', 'Audi', 'BMW', 'Volkswagen'];
cars.forEach(car => {
  console.log(car);
})

/**
 * Special Array methods which apply a callback function
 */

const roles = ['create', 'read', 'update', 'delete'];
const mappedRoles = roles.map((role) => role.toUpperCase());
console.log(mappedRoles); // Array(4) [ "CREATE", "READ", "UPDATE", "DELETE" ]

const cars = ['Mercedes', 'Audi', 'BMW', 'Volkswagen', 'Porsche'];
const vwGroup = cars.filter((car) => car === 'Audi' || car === 'Volkswagen' || car === 'Porsche');
console.log(vwGroup); // Array(3) [ "Audi", "Volkswagen", "Porsche" ]

const numbers = [1, 2, '3', 4, '5'];
const onlyNumbers = numbers.every((value) => typeof value === 'number');
console.log(onlyNumbers); // false

const cars = ['Mercedes', 'Audi', 'BMW', 'Volkswagen', 'Porsche'];
const hasAudi = cars.some((car) => car === 'Audi');
console.log(hasAudi); // true