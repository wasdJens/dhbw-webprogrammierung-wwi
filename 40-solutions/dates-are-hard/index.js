import { format } from "date-fns";

console.log('Hello World');

const a = format(new Date(2014, 1, 11), "yyyy-MM-dd");
console.log(a);