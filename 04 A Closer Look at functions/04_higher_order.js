"use strict";

const greet = () => console.log("Hey Jonas");
// btnnclose.addEventLister("click", greet);

function count() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  };
}

let countfun = count();
countfun();
countfun();
countfun();
countfun();
countfun();
