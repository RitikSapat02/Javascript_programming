
//constant variables

const AGE=9;

// const a="string";    cannot be redeclared
// a=9;                 cannot be reassigned

const PI=3.14;         
// const AB;             must asssign a value
let r=2;
let area=PI*r**2;
console.log(area);

// console.log(C);          ERROR 
// const C=8;

const b=9;
{
    const b="string";
    console.log("Inside :",b);
}
console.log("Outside :",b);