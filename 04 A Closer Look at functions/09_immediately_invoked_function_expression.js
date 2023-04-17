(function () {
  console.log("This will never run again!");
})();

(() => console.log("this will also never run again!"))();
