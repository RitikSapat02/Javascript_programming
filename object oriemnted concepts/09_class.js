// class vehicle {
//   constructor(numWheels, price) {
//     this.numWheels = numWheels;
//     this.price = price;
//   }

//   getprice() {
//     return this.price;
//   }
// }

//class expression
let vehicle = class {
  constructor(numWheels, price) {
    this.numWheels = numWheels;
    this.price = price;
  }

  getprice() {
    return this.price;
  }
};

vehicle1 = new vehicle(2, 2000);
vehicle2 = new vehicle(4, 40000);

console.log(vehicle.prototype);
console.log(Object.getPrototypeOf(vehicle1));
console.log(vehicle1);
