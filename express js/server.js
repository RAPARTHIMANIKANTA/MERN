const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("hi my name is manikanta")
})

app.get("/about",(req,res)=>{
    res.send("i am aiml engineer in kiet college ")
})

app.get("/contact",(req,res)=>{
    res.send("you can contact me at manikantaraparthi71@gmail.com")
})

app.get("/hobbies",(req,res)=>{
    res.send("my hobbies are playing games and watching movies")
})


app.listen(3000)
console.log("server is running")
console.log("server is running on port 3000")