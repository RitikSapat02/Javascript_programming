"use strict";

function Student(name, rollNo, marks) {
  this.name = name;
  this.rollNo = rollNo;
  this.marks = marks;
}

let student1 = new Student("a", 5, 60);
let student2 = new Student("b", 40, 80);
console.log(student1);
console.log(student2);
