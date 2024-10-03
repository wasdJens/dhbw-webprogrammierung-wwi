let helloWorld = "Hello World";
console.log(helloWorld);

interface User {
  name: string;
  age: number;
  gender: "m" | "w" | "x";
}
const user: User = {
  name: "Jens",
  age: 25,
  gender: "m",
};

const user2: User = {
  name: "Jens",
  age: "25",
  gender: "m",
};

class Car {
  model: string;
  manufacturer: string;

  constructor(model: string, manufacturer: string) {
    this.model = model;
    this.manufacturer = manufacturer;
  }
}

function greet(name: string): string {
    return `Hi ${name};`
}

console.log(greet('Jens'));