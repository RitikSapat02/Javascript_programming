"use strict";
class vehicle {
  constructor(nwheels, price) {
    this.wheels = nwheels;
    this.price = price;
  }

  getprice() {
    return this.price;
  }

  printDescription() {
    console.log("vehicle ", this.wheels, this.price);
  }
}

class car extends vehicle {
  constructor(price, numDoors) {
    super(4, price);
    this.numDoors = numDoors;
  }

  printDescription() {
    super.printDescription();
    console.log("car ", this.numDoors);
  }
}

let c = new car(40000, 4);
console.log(c);
c.printDescription();
