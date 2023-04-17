// setTimeout(() => console.log(`Here is your pizza`), 3000);

// setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
//   3000,
//   "olives",
//   "spinach"
// );

const ingredients = ["ovives", "spinach"];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);

console.log("waiting...");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

//setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
