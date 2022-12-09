//you can only redeclare variables which are defined using var 

var a=9;
var a;           //redeclared variable does not lose its value
console.log(a);

var b="car";
var b;
console.log(b);

var b=true;
console.log(b);
console.log(typeof b);
