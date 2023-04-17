const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LH",
  bookings: [],
};

const book = lufthansa.book;

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");
console.log(eurowings);

const bookEW69 = book.bind(eurowings, 69); //predefined "book" function with this set to eurowings and flightnum set to 69
bookEW69("Ritik");
bookEW69("Pratik");

const bookEW101Ritik = book.bind(eurowings, 101, "Ritik");
bookEW101Ritik();

//with event listeners
lufthansa.planes = 300;
lufthansa.buyplane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyplane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyplane.bind(lufthansa));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value+value*0.23;

console.log(addVAT(100));

//challenge

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addTaxRate(0.23)(100));
