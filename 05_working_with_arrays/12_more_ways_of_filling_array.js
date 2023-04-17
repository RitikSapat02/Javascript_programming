//console.log([1,2,3,4,5,6,7])
//console.log(new Array(1,2,3,4,5,6,7))
const x = new Array(7);
//x.fill(3)
// x.fill(1, 3); //fill(value,start,end)  end not included
x.fill(1, 3, 5);
console.log(x);

const a = [1, 2, 3, 4, 5, 6];
a.fill(0, 2, 5);
console.log(a);

//////Array.from////
const y = Array.from({ length: 5 }, () => 7);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//Exercise
const random_array = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100)
);
console.log(random_array);

const movements = Array.from(document.querySelectorAll("h1"), (el) =>
  el.textContent.replace(" ", "🥳")
);
console.log(movements);
