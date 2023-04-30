//rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector("a").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);

  //stop propagation
  //   e.stopPropagation();
});

document.querySelector(".nav-parent").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Nav", e.target, e.currentTarget);
});

document.querySelector(".sec-parent").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Section", e.target, e.currentTarget);
});

document.querySelector(".div-parent").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("Div", e.target, e.currentTarget);
  }
  //   true //capturing phase //if true then this will run first as it is handled while we are moving down(capturing) and rest will handled while we go up(bubbling)
);

//target : element where event originated
//currentTarget: element where event handler is attached and which is handling the event
//currentTarget is = this keyword
