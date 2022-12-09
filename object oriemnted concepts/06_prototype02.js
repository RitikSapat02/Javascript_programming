"use strict";

function vehicle(nwheels = 0, price = 0) {
  this.nwheels = nwheels;
  this.price = price;
}

vehicle.prototype.getprice = function () {
  return this.price;
};

let vehicle2 = new vehicle(4, 3000000);
let vehicle1 = new vehicle(2, 20000);
console.log(vehicle1);
console.log(vehicle2);

//adding property at runtime to all objects
vehicle.prototype.color = "black";
console.log(vehicle1.color);
vehicle1.color = "red";
console.log(vehicle1.color);
console.log(vehicle2.color);
console.log(vehicle1.getprice());
console.log(vehicle.prototype); //access prototype

Object.prototype.car = "lambo";
console.log(Object.car);
console.log(vehicle.car);
console.log(vehicle1.car);
