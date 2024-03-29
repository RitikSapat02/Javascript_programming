//// roots
console.log(Math.sqrt(4));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

//// max min
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));
console.log(Math.max(5, 18, Number.parseInt("23px"), 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

////// constants
console.log(Math.PI);
//area of a circle with radius 10px

console.log(Math.PI * Number.parseFloat("10px") ** 2);

/////// random
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

///ROunding integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

// trunc vs floor
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0)); //return string
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2));
