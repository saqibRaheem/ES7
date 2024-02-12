// Destructing assignment is used to un packed values from an arrays or propertyes from an object in to destructur valuse
// let arr = [1,2,3,4,5,6,7,89]
// var [a,b] = arr
// console.log(a,b);

// var [a,b,c] = arr
// console.log(a,b,c);


// var [a,b,...rest] = arr
// console.log(a,b,rest);

// similar we can destructure object on the left hand side of the assignment

// var obj = {a:1,b:2}
// var {a,b}= obj
// console.log(a,b);

// SPRADE SYNTEX
// var arr1 = [1,2,3]
// var obj = {...arr1}
// console.log(arr1);
// console.log(obj);


// function sum(a,b,c){
// return a+b+c
// }

// console.log(sum(...arr1));



var obj2 = {
    name:"saqib",
    email:"saqib@gmail.com",
    phone:"1234567",
}

console.log({...obj2,name:'Raheem',email:'xyz',phone:'xyz'});