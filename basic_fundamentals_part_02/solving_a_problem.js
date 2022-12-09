const getamplitude = function (t1, t2) {
  const temp = t1.concat(t2);
  let max = temp[0];
  let min = temp[0];

  for (let i = 1; i < temp.length; i++) {
    const current = temp[i];
    if (typeof current != "number") continue;
    if (current > max) max = current;
    if (current < min) min = current;
  }
  console.log(max, min);
  return max - min;
};
console.log(
  getamplitude([1, 2, 3, -1, 7, 4775, -5959], ["string", 3, 4, 5, "sgetc", 6])
);
