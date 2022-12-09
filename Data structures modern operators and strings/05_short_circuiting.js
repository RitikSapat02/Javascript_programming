"use strict";
// console.log(3 || "jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(false || 0);
// console.log(undefined || null);
// console.log(null || undefined);
// console.log(undefined || 0 || "" || "Hello" || 23 || null);

const restaurant = {};

// const guest1 = restaurant.num ? restaurant.num : 10;
const guest1 = restaurant.num || 10;
// console.log(guest1);

//AND

console.log(0 && "jonas");
console.log(7 && "jonas");
console.log("Hello" && 23 && null && "jonas");

//practical exaple
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
