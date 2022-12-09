a = [1, 2, 3, 4, 5];
function print(e) {
  console.log(e);
}
a.forEach(print);

a.forEach(function (element) {
  console.log(element);
});

a.forEach((element) => console.log(element));
