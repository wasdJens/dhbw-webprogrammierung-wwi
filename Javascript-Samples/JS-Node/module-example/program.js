const fs = require('fs');

const data = fs.readFileSync('users.txt', 'utf8');
console.log(data.toString())
