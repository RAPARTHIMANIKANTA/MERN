const express = require("express");
const app = express();
app.use(express.json());
let students = [];
app.post("/students", (req, res) => {
    students.push(req.body);
    console.log(students);
    res.send("Student added successfully");
});
app.get("/students", (req, res) => {
    res.json(students);
});
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex === -1) {
        return res.status(404).send("Student not found");
    }
    students.splice(studentIndex, 1);
    res.send("Student deleted successfully");
});
app.listen(3000, () => {
    console.log("Server is running");
});
app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(student => student.id === id);
    if (!student) {
        return res.status(404).send("Student not found");
    }
    student.name = req.body.name;
    student.college = req.body.college;
    res.send("Student updated successfully");
});
app.patch("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(student => student.id === id);
    
    if (req.body.name) {
        student.name = req.body.name;
    }
    if (req.body.college) {
        student.college = req.body.college;
    }
    if (req.body.hobbies) {
        student.hobbies = req.body.hobbies;
    }
    res.send("Student partially updated");
});