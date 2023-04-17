"use strict";

const add = (a, b) => a + b;

const counter = {
  value: 23,
  inc: function () {
    this.value++;
  },
};

const greet = () => console.log("Hey Jonas");
btnClose.addEventListener("click", greet);

counter.inc.bind(someOtherObjcet);
