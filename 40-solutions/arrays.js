const cars = [
  {
    name: 'Mercedes',
    price: 25000,
    color: 'red',
  },
  {
    name: 'BMW',
    price: 35000,
    color: 'green'
  },
]

function search(property, value) {
  const result = cars.find((car) => {
    return car[property] === value;
  })
  return result;
}

// Ich möchte das Auto suchen, welches einen Preis von 25000 hat
const car = search('price', 25000);
const isCarGreen = search('color', 'green');
console.log(car);
console.log(isCarGreen);

const carAsArray = [isCarGreen];