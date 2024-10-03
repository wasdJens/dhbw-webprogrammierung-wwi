function log() {
  console.log("Hello from the console");
}

function error() {
  throw Error("Something went wrong :(");
}

async function buttonHandler() {
  const res = await fetch("https://httpbin.org/get");
  console.log(await res.json());
}

function writeToLocalStorage() {
  localStorage.setItem("Test", "Hello World!");
}

function veryLongFunction(input) {
  debugger;
  let test = {
    input: "",
    value: "",
    order: 5,
  };

  if (typeof input === "string") {
    console.log("Input is a string");
    test.input = input;
    (test.value = null), (test.order = Math.random() * (100 - 0) + 0);
  }

  if (typeof input === "object") {
    test = { ...input };
  }

  const list = Array.from({ length: 50 }, () => Math.floor(Math.random() * 50));
  const isNumber5 = list.find((number) => number === 5);
  if (isNumber5) {
    console.log("Found number 5!");
  } else {
    console.log("No number 5 found");
  }
}
