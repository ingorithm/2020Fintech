var fs = require('fs');

console.log('a');
var result = fs.readFileSync('./example/test.txt', 'utf8');
console.log(result);
console.log('c');
