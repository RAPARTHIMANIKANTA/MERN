function completed(){
  console.log("your task is completed!!")
}
function dotask(callback){
  console.log("doing task...");
  setTimeout(() => {
    console.log("your task is completed internally");
    callback();

  },4000);
}
dotask(completed);



function showResult(result) {
    console.log("Result:", result);
}
function calculate(callback) {
    let result = 10 + 20;
    callback(result);
}
calculate(showResult);