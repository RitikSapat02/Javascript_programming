const x = (a,b) => a*b;
console.log(x(2,3));

//function Expression
const calcage1 = function(birthyear)
{
    return 2037 - birthyear;
}

// arrow functions
const calcage2 = birthyear => 2037 - birthyear;
age = calcage2(1991);
console.log(age);



const yearUntilRetirement = (birthyear,firstName) =>
{
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntilRetirement(1991,"Jonas"));