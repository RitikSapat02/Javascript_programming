 
 var a=9;
 console.log(a);

 //Not have a block scope

 var b=7;
 {
     var b=8;
     console.log(b);
    }

console.log(b);

//variables declared inside the block can be accessed from outside as well
{
    var c=9;
}

console.log(c);


var total=d**2;
console.log(d);           //undefined
var d=9;
console.log(total);     //NaN
console.log(typeof total)