console.log("1");
console.log("2");
console.log("3");
try {
  console.log(number);
} catch (error) {
  console.log(error);
}
console.log("5");
try {
  console.log("67");
} catch (error) {
  console.log(error);
}
console.log("6");
//JS Form Validation
let email = "asdf@gmail.com";
let password = "12345";
if (email === "asdf@gmail.com") {
  if (password === "12345") {
    console.log("Login Successful");
  } else {
    console.log("Incorrect Password");
  }
} else {
  console.log("invalid Credentials");
}
show()
function show(){
  console.log("normal function")
}
show()
let variableFun = function(){
  console.log("anonymous function")
}
// arrowFunction ()
let arrowFunction =()=>{
  console.log("arrow function")
}
arrowFunction()


