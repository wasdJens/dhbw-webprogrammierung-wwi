const list = [10, 20, 30, 40];

const [a, b] = list;
console.log(a); // 10
console.log(b); // 20

const course = {
  name: "Web Programming",
  lecturer: "Jens Reiner",
  location: "Heidenheim an der Brenz",
  online: false,
  participants: 25,
};

// Classic
const aOnline = course.online;
const bParticipans = course.participants;
console.log(aOnline, bParticipans);

// Object destructuring
const { online, participants } = course;
console.log(online, participants); // False


const numbers = [2,4,8];
function sum(x,y,z) {
    return x + y + z;
}
console.log(sum(...numbers)); // 14

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics); // Head, shoulders, knees, and, toes

let obj1 = { first: 'Hallo'};
let obj2 = { second: 'World'};

let mergedObj = {...obj1, ...obj2};
console.log(mergedObj); // Object { first: "Hallo", second: "World" }

function sum2(...numbers) {
    return numbers.reduce((a, b) => a + b);
}
console.log(sum2(2,4,8)); // 14