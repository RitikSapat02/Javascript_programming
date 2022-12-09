const data1 = [17, 21, 23];
const data2 = [-1, 0, 5, 9, 8, 10];

const printforecast = function (a) {
  let str = "...";
  for (let i = 0; i < a.length; i++) {
    str += `${a[i]}oC in ${i + 1} days ...`;
  }
  return str;
};

console.log(printforecast(data1));
