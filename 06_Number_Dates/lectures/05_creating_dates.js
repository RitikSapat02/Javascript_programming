//creating dates

const now = new Date();
console.log(now);

console.log(new Date("2023-03-28T10:38:26.638Z"));

console.log(new Date("December 24, 2015")); //index =0

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //3 days after 0th

// working  with dates
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toString());
console.log(future.getTime()); //timestamp

console.log(new Date(2142237185000));

console.log(Date.now()); //current timestamp

future.setFullYear(2040);
console.log(future);
