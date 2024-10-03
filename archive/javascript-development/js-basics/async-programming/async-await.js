// The following examples can also be run inside the browser

function test() { return "Hello World"};
console.log(test()); // "Hello World"

async function test() { return "Hello World"};
console.log(test()); // Promise

test().then((value) => console.log(value)); // Hello World

async function test() {
  return await Promise.resolve("Hello World");
}

test().then((value) => console.log(value)) // Hello World