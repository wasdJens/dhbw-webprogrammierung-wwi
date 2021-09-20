const price = 800;
const discount = 200;
let canPurchase;

// When price is equal or lower than 600 we want to purchase it
if ((price - discount) <= 600) {
  canPurchase = true;
} else { // When price is larger than 600 we can not purchae it
  canPurchase = false;
}
console.log(canPurchase); // true


// 0, "", null and undefined are all false values
let userInput = null;
let hasUserInput;

if (userInput) {
  hasUserInput = true;
} else {
  hasUserInput = false;
}
console.log(hasUserInput) // false

// Combine multiple if with else statements
const price = 2000;
if (price < 2000) {
  console.log('Cheap!')
} else if (price > 2000) {
  console.log('Expensive!')
} else {
  console.log('Perfect!') // Perfect!
}

// Switch statement instead of multiple if statements
let price = 2000
switch(price) {
  case 1000:
    console.log('Price is 1000')
    break;
  case 1500:
    console.log('Price is 1500')
    break;
  case 2000:
    console.log('Price is 2000')
    break;
  default:
    console.log(`Price is ${price}`)
}