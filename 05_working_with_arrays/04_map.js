const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map((item) => {
  return item * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

const movementsDescription = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: you ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescription);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const square = nums.map((num) => num ** 2);

console.log(square);

const a = ["str", "strw", "shd", "sjd"];
const capitalize = a.map((str) => str.toUpperCase());
console.log(capitalize);

const b = [34, 34, 534, 3];
const newA = b.map((item) => {
  item++;
});
console.log(b, newA);

const c = [34, 34, 534, 3];
const newC = b.map((item) => {
  return 1;
});
console.log(c, newC);
