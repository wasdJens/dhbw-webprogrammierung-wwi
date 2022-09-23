for (begin; condition; step) {
  // repeat until false
}

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

do
  statement
while (condition);

let i = 0;
do {
  console.log(i)
  i++
} while (i <= 100);


while(condition) {

}

let i = 0;
while (i <= 100) {
  console.log(i);
  i++;
}

const user = {
  name: "Jens",
  age: 25,
  gender: "m",
}

for (const i in user) {
  console.log(i); // name, age, gender
}

const array1 = ['A', 'B', 'C', 'D'];

for (const char of array1) {
  console.log(char); // A, B, C, D
}