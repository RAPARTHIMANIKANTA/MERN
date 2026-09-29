const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("hi my name is masmus desmus meridious")
})

app.listen(3000)