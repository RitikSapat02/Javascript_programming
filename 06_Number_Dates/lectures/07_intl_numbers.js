const num = 3884764.23;

const options = {
  style: "currency",
  unit: "mile-per-hour",
  currency: "EUR",
  //   useGrouping: false,
};

console.log("US: ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
console.log("India: ", new Intl.NumberFormat("en-IN", options).format(num));
