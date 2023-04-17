const currency = new Map([
  ["USD", "United States dollar"],
  ["EUR", "EURO"],
  ["GBP", "Pound sterling"],
]);

currency.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

//set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});
