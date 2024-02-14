// var is a global scope;
// let and const is a block scopp
// let can not be re-declared but update value
// const can not be re-declared and update value because this a constant value



//   BLOCK SCOPE

// Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.
// Variables declared inside a { } block cannot be accessed from outside the block:

let a = 4;
console.log(a); // ACCESSed a variable 

{
    var b = 3;
}
console.log(b); // NOT ACCESSed b variable

// FUNCTION SCOPE
// JavaScript has function scope: Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.
// code here can NOT use myName

function myFunction() {
   var myName = "saqib";
    // code here CAN use myName
  }
  console.log(myName);
  // code here can NOT use myName


//   GLOBAL SCOPE
// A variable declared outside a function, becomes GLOBAL.

let add = "add";
// code here can use add

function myFunction() {
// code here can also use add
}