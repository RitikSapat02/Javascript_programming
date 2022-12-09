"use strict";
var i = 10;

function outer() {
  var j = 20;
  //   console.log(i, j);
  var inner = function () {
    var k = 30;
    console.log(j, k);
    j++;
    k++;
  };
  return inner;
}

var inner = outer(); //now global inner is also a function
inner(); //this will have different execution context
inner(); //this will have diffrent exection context
