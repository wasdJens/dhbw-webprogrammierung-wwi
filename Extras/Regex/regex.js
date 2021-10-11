const regex = new RegExp("yellow|red");

const text = "yellow is my color!";
const found = text.match(regex);
console.log(found);
