const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Stevan");

greet("Hello")("Jonas");

const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet2("Hollaa")("Ritik");
