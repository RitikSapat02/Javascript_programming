// 1) To Numbers
const inputYear='1991';
console.log(Number(inputYear));     
console.log(Number(inputYear)+18);        //199118-without conversion

console.log(Number('johns'))            //NaN
console.log(Number(''));

console.log(Number(true));

//unary + operator
let y= '1263';
y = +y;
let x= +y;
let z= +'string';
console.log(++y,x,z);

// 2) To strings
console.log(String(123));
console.log(String(true));

console.log(false.toString());


