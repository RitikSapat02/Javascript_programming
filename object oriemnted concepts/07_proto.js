"use strict";

function vehicle(nwheels = 0, price = 0) {
  this.nwheels = nwheels;
  this.price = price;
}

vehicle.prototype.getprice = function () {
  return this.price;
};
vehicle.prototype.color = "black";

let vehicle1 = new vehicle(2, 20000);
let vehicle2 = new vehicle(4, 3000000);

//__proto__
console.log(vehicle1.__proto__);

console.log(vehicle1.__proto__ === vehicle.prototype);

//Object.getprototypeOf(object_name)

console.log(Object.getPrototypeOf(vehicle1));
console.log(Object.getPrototypeOf(vehicle1) === vehicle.prototype);

console.log(vehicle.prototype.isPrototypeOf(vehicle1));
console.log(vehicle.prototype.isPrototypeOf(vehicle2));

console.log(vehicle1.hasOwnProperty("price"));
console.log(vehicle1.hasOwnProperty("getprice"));
