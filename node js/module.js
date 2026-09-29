//--------------------modules of os-------------//
const os = require('os');
console.log(os.hostname());
console.log(os.freemem());

//--------------------modules of fs-------------//
const fs = require('fs');
fs.writeFile('mern.txt','node js/mongodb/express',(err)=>{
  if(err){
    console.error(err);
  }else{
    console.log('file created');
  }
})

//--------------------modules of fs-------------//
fs.readFile('mern.txt','utf8',(err,data)=>{
  console.log(data);
});