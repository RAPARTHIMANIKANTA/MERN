const students = [
  { name: "Mani", marks: 85 },
  { name: "Ravi", marks: 72 },
  { name: "Kiran", marks: 91 }
];
//map()
const names = students.map(student => student.marks);
console.log(names);
//filter()
const passedStudents = students.filter(
  student => student.marks >= 75
);
console.log(passedStudents);
//find()
const student = students.find(
  student => student.name === "Ravi"
);
console.log(student);
//reduce()
const totalMarks = students.reduce(
  (total, student) => total + student.marks,
  0
);
console.log(totalMarks);