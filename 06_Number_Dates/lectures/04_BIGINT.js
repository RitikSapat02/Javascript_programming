console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(223492034228340293429402342n);
console.log(223492034228340293429402342);

console.log(BigInt(22349203422834));

console.log(1000n + 1000n);
console.log(23023423423429348242389429323n + 1n);

const huge = 4359345345343534654n;
const num = 23;
console.log(huge * BigInt(num));

//Exceptions
console.log(20n > 15);
console.log(20n == 20);
console.log(20n === 20);
console.log(typeof 20n);

console.log(huge + " is REALLY big!!!");
