console.log(23 === 23.0);

// Base 10 - 0 to 9
// Binary base 2 - 0 ,1
console.log(0.1 + 0.2);

/////// string to number
console.log(Number("23"));
console.log(+"23");
console.log("23" * 1);

const a = +"23";
console.log(typeof a);

////parsing
console.log(Number.parseInt("30px"));
console.log(Number.parseInt("px30"));

console.log(Number.parseFloat("      2.5rem  "));
console.log(Number.parseInt("2.5rem"));
console.log(parseInt("2.5rem")); //global functions

//check if value is 'NaN'
console.log(Number.isNaN(20));
console.log(Number.isNaN("20")); //because, string != NaN
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0)); //because, Infinity != NaN

//checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20x"));
console.log(Number.isFinite(23 / 0));

//checking is value is integer
console.log(Number.isInteger(20));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
