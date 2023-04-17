/////////////strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

////////////Numbers: Unexpected result
arr = [2, 3, 23, 3, 12, 4, 5, 6, 0, -8];
arr.sort();
console.log(arr);

//////////Numbers : own comparison function
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//return < 0, A,B (keep order)
//return > 0, B,A (switch order)

//increasing
// movements.sort((a, b) => {
//   if (a > b) return 1;

//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

//decreasing
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

movements.sort((a, b) => b - a);
console.log(movements);
