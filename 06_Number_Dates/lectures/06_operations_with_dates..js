const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcdaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const days1 = calcdaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
