"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////////////////////////////////////////////
//button scrolling
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current Scroll (x/y)", window.scrollX, window.scrollY);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //***scrolling
  ///old ways

  // window.scrollTo(
  //   s1coords.left + window.scrollY,
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  ///modern way
  section1.scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////////////////////////////////////
//Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });               ////we implemented this using event delegation

////////event dele gation
//steps:
//1. add event listner to common parent element
//2. Determine what element oriignated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  //matching strategy:- to only run below code when nav item is clicked
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///DOM TRAVERSING

const h1 = document.querySelector("h1");

//Going Downwards: child
console.log(h1.querySelectorAll(".highlight"));

console.log(h1.childNodes);

console.log(h1.children);

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

//Going Upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";

h1.closest("h1").style.background = "var(--gradient-primary)";

//Going sideways: siblings
//'we can only access direct siblings'
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});
