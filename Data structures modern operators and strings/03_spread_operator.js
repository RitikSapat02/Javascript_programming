//Normal way to unpacking elements
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

("use strict");

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

const newMenu = [...restaurant.mainMenu, "gnocci", "lassi"];
console.log(newMenu);

///copy array
const newmainMenucopy = [...restaurant.mainMenu];
console.log(newmainMenucopy);

//join arrays

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//spread on strings
const str = "Jonas";
const letters = [...str, " ", "s."];
console.log(letters);
console.log(...str);
