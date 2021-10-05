// @ts-nocheck
/**
 * Class declaration in Javascript
 */

class Car {
  constructor(model, manufacturer) {
    this._model = model;
    this._manufacturer = manufacturer;
  }

  open() {
    console.log("Car is now open");
  }

  close() {
    console.log("Car is now closed");
  }

  get model() {
      return this._model;
  }

  set model(value) {
      this._model = value;
  }
}

console.log(Car.name); // Car

const mercedes = new Car("S", "Mercedes");
console.log(mercedes); // Object { model: "S", manufacturer: "Mercedes" }
console.log(mercedes._manufacturer); // Mercedes

mercedes.open(); 
mercedes.close();

mercedes.model = 'C';
console.log(mercedes.model);