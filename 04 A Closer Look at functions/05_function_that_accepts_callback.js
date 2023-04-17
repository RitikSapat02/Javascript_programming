const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher Order function
const transform = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Trannsformed by: ${fn.name}`);
};

transform("Javascript is the best!", upperFirstWord);
transform("Javascript is the best!", oneWord);

const g = (e) => {
  console.log(e);
};
["Jonas", "Martha", "Adam"].forEach(g);
