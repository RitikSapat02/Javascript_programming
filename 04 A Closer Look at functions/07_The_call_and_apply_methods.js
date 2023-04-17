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

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// book(23, "sarah williams"); //error regular function has this keyword as undefined in strict mode

//////call method//////////////

book.call(eurowings, 23, "Sarah Williams"); //1st argum =what the this keyword should point to. call is a method which we can call on any function .it will call to book() with a this keyword set to 1st argument

console.log(eurowings);

book.call(lufthansa, 111, "MR x");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LH",
  bookings: [],
};

book.call(swiss, 583, "Mary cooper");
console.log(swiss);

//////////////////Apply method///////////////////
//same as call but insted of arguments it takes array of arguments

const flightData = [456, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

///apply is not that used any more in modern javascript

book.call(swiss, ...flightData);
