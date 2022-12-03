console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

//implicit conversion
let money=9;
if(money){
    console.log("Rich");
}else{
    console.log("Poor");
}

let height;
if(height){
    console.log("It is defined");
}else{
    console.log("It is undefined");
}