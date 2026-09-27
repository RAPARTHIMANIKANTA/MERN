function foodready(){
  console.log("your food is ready!");
}
function orderfood(callback){
  console.log("food orderd...");
  setTimeout(() => {
    callback();
    },4000);
}
orderfood(foodready);



