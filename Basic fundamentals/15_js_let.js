let a=7;

// let a; //cannot redeclared
{
    let a=8;
    console.log("Inside :",a);                    //Block scope
}
console.log("Outside :",a);

{
    const b=8;
    let r=9;
}
// console.log(b);                    //Error cannot access ouside the block
// console.log(r);