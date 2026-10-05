const express = require("express");
const student = require("./student.json"); 
const app = express();

app.get("/students ", (req, res) => {
  const course = req.query.course  
  res.json(student);
});

app.listen(3000);
console.log("server is running");