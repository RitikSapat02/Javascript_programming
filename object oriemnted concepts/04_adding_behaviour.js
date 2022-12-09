"use strict";
//adding  methods

function vehicle(nwheels = 0, price = 0) {
  this.nwheels = nwheels;
  this.price = price;
  this.getprice = function () {
    return this.price;
  };
}

let vehicle1 = new vehicle(2, 20000);
let vehicle2 = new vehicle(4, 3000000);

console.log(vehicle1);
console.log(vehicle2);

console.log(vehicle1.getprice());
