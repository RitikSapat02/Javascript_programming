"use strict";

const restaurant = {
  name: "classico Italiano",
  location: "via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Oraganic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
/*normlly*/
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

// const [first, second] = restaurant.categories;
let [first, , second] = restaurant.categories; /* to skip second value*/
console.log(first, second);

[first, second] = [second, first]; /* switching/destructuring */
console.log(first, second);

let p = 4;
let r = 5;
console.log(p, r);
[p, r] = [r, p];
console.log(p, r);

const [starter, main] = restaurant.order(2, 2);
console.log(starter, main);

const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested; /* nested destructuring */
console.log(i, j, k);

const [e, f = 0, g = 0] = [2, 3];
console.log(e, f, g);
