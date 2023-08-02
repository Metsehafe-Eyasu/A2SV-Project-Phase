// Write a few examples for utilizing Lodash to perform some data manipulation tasks
// 1. Create a new array of integers
// 2. Create a new array of integers that are greater than 10
// 3. Create a new array of integers that are multiples of 3

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const greaterThanTen = _.filter(numbers, (number) => number > 10);
const multiplesOfThree = _.filter(numbers, (number) => number % 3 === 0);

console.log(greaterThanTen);
console.log(multiplesOfThree);

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];

let sorted = _.sortBy(users, [function(o) { return o.user; }]);
console.log(sorted)
sorted = _.sortBy(users, ['user', 'age']);
console.log(sorted)
