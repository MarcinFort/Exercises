const fs = require('fs');

let path = process.argv[2];

let buffer_arr = fs.readFileSync(path).toString().split("\n");

console.log(buffer_arr.length - 1);
