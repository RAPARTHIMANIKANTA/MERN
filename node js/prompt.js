const readline =require("readline");
const cl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
cl.question("what is your fav heroin: ",function(name){
  cl.question("what is ur fav hero: ",function(name2){
    console.log("your fav heroin is: "+name+" and your fav hero is: "+name2);
    cl.close();
  });
});