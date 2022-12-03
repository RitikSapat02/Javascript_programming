"use strict";

const restaurant = {
  name: "classico Italiano",
  location: "via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Oraganic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },

    fri: {
      open: 11,
      close: 23,
    },

    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  oderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//here we are passing obj and calling the method also, their it will be destructure for local variables and we can then use them
restaurant.oderDelivery({
  time: "22.30",
  address: "via del sole 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.oderDelivery({
  address: "via india",
  starterIndex: 1,
});

/* object destructuring */

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: restaurantOpenTime,
//   categories: restaurantCategories,
// } = restaurant;

// console.log(restaurantName, restaurantOpenTime, restaurantCategories);

//default name
// const { menu = [], starterMenu: foodMenu = [] } = restaurant;
// console.log(menu, foodMenu);

//mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects

const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);
