const express=require("express");
const app=express();

app.get('/profile/:username',(req,res)=>{
   console.log(req.params.username);
   res.send("hi my name is "+req.params.username);
})

app.get('/student/:name/:course',(req,res)=>{
   console.log(req.params.name);
   console.log(req.params.course);
   res.send(`welcome ${req.params.name} and your course is ${req.params.course}`);
})

app.listen(3000)