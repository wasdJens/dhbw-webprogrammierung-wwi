/**
 * The following file is based on the Grundlagen section inside the script.
 * 
 * Please note you may not be able to compile it
 */

let car = "Mercedes";
car = 25;

let age: number = 25;

// const eqs = {
//   name: "EQS",
//   brand: "Mercedes",
//   year: 2021,
//   ev: true,
//   affordable: false
// }

interface Car {
  name: string;
  brand: string;
  year: number;
  ev: boolean;
  affordable: boolean;
}

const eqs: Car = {
  name: "EQS",
  brand: "Mercedes",
  year: 2021,
  ev: true,
  affordable: false
}

const sclass: Car = {
  name: "S",
  brand: "Mercedes",
  year: "2021",
  ev: false,
  affordable: false
}


class MyCar {
  name: string;
  brand: string;

  constructor(name: string, brand: string) {
    this.name = name;
    this.brand = brand;
  }
}

const eclass: Car = new MyCar("E", "Mercedes");

function createCar(car: Car): Car {
  return {}
}

type Brand = 'Mercedes' | 'BMW' | 'Volkswagen';

interface Car2 {
  name: string;
  brand: Brand;
}

const car2: Car2 = {
  name: "id3",
  brand: "Test",
}

function createCar(brand: string | Brand) {

}

type CarArray = Array<Car2>;

const carArray: CarArray = [
  {
    name: "S",
    brand: 'Mercedes'
  },
  {
    test: "A",
    brand: "Mercedes"
  }
]