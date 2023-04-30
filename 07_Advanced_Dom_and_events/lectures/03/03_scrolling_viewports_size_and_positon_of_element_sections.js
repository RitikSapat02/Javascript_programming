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
