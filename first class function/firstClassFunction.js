// Function Statement
function a() {
    console.log("Hello");
}
a();

// Function Experssion
var b=function () {
    console.log("Hello");
}
b();

// Difference between Function Statement & Function Expression
// The major difference between these two lies in Hoisting.
a(); // "Hello A"
b(); // TypeError
function a() {
  console.log("Hello A");
}
var b=function () {
  console.log("Hello B");
}
// Why? During mem creation phase a is created in memory and function assigned to a. But b is created like a variable (b:undefined) and until code reaches the function()  part, it is still undefined. So it cannot be called.

// Function Declaration
// Other name for function statement.

// Name Function Expression
var b=function xyz() {
    console.log("b called");
}
b(); // "b called"
xyz(); // Throws ReferenceError:xyz is not defined.
// xyz function is not created in global scope. So it can't be called.


// Different between Parameters & Argumments
var b=function(param1, param2) { // labels/identifiers are parameters
    console.log("b called");
}
b(arg1, arg2); // arguments - values passed inside function call


// First Class Function or Function Citizens
var b=function(param1) {
    console.log(param1); // prints " f() {} "
}
b(function(){});
  
// Other way of doing the same thing:
var b=function(param1) {
    console.log(param1);
}
function xyz(){
}
b(xyz); // same thing as prev code
  
// we can return a function from a function:
var b=function(param1) {
    return function() {
    }  
}
console.log(b()); //we log the entire fun within b.