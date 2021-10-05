// @ts-nocheck
const prompt = require("prompt");

console.log("Welcome to the guessing game");
console.log("Lets start by setting the low and high number limit");

async function main() {
  prompt.start();
  const { low, high } = await prompt.get(["low", "high"]);
  console.log(`Limit is from ${low} to ${high}`);

  const numberToGuess = getRandomInt(low, high);

  while (true) {
    const { guess } = await prompt.get(["guess"]);
    printGuess(guess);
    if (checkGuess(guess, numberToGuess)) {
      break;
    }
  }

  console.log(`You are correct! The number we were looking for was: ${numberToGuess}`)
}

main();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

const printGuess = (guess) => {
  console.log(`Your guess is: ${guess}`);
}

function checkGuess(guess, result) {
  if (guess < result) {
    console.log(`Your guess is too low`);
    return false;
  }
  if (guess > result) {
    console.log(`Your guess is too high`);
    return false;
  }
  if (guess == result) {
    return true;
  }
}
