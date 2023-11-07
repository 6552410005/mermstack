const test02 = require('./test02')
const path = require('path')
const {dirname, basename} = require('path')

console.log(path.dirname(__filename));
console.log(test02.major);

console.log(path.basename(__filename));
console.log(basename(__filename));