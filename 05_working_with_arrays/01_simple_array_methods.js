let arr = ["a", "b", "c", "d", "e"];

////////////////////////01) slice()
console.log("*********slice**********");
console.log(arr.slice(2)); //return new array
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

//shallow copy
const copy = arr.slice();
console.log(copy);

/////////////////////////02) splice()
console.log("\n\n*********splice**********");
// console.log(arr.splice(2));
console.log(arr);
arr.splice(-1);
console.log(arr);

arr.splice(1, 2);
console.log(arr);

/////////////////////////03) Reverse()
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

/////////////////////////04) concat()
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

/////////////////////////05) join()
console.log(letters.join("-"));
