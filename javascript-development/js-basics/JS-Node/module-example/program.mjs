import { readFileSync } from 'node:fs';

const data = readFileSync('users.txt', 'utf8');
console.log(data.toString())
