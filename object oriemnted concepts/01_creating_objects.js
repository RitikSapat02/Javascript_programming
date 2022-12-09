// let student = {
//   name: "abc",
//   rollNo: 10,
//   marks: 80,
// };

// console.log(student);

function createStudent(name, rollNo, marks) {
  let student = {}; //new Object();
  student.name = name;
  student.rollNo = rollNo;
  student.marks = marks;
  return student;
}

let student1 = createStudent("abcd", 15, 78);
let student2 = createStudent("pqrs", 20, 77);

console.log(student1);
console.log(student2);
