let markWeight=78;
let markHeight=1.69;
let johnWeight=92;
let johnHeight=1.95;
let markBMI= markWeight/markHeight**2;
let johnBMI= johnWeight/(johnHeight*johnHeight);

console.log(markBMI,johnBMI);
if(markBMI>johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than john's (${johnBMI})!`);
}else{
    console.log(`john's BMI (${johnBMI}) is higher than mark's (${markBMI})!`);
}