"use strict";
let a = 9,
  b = 9;

const sum = function () {
  a = 10;
  b = 20;
};

sum();

// if (true) {
//   a = 0;
//   b = 0;
// }
console.log(a, b);
