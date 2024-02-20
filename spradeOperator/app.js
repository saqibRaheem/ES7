// sprade operator ... is allows an iterable such as an array or string to be expanded into seprate elements 

let numbers = [1, 12, 3, 4, 5,9]
// console.log(numbers);
// let maxNum = Math.max(2,3,4,9) // 9
// let maxNum = Math.max(numbers) // NaN
let maxNum = Math.max(...numbers) // sprade sentex 
// console.log(maxNum);
// let max = 0
// for(i=0;i<numbers.length;i++){
//    console.log(numbers[i]);
//   if(numbers[i] > max){
//     max = numbers[i]
//   }
// }
// console.log(max);



let text = "saqib raheem";
// let sep = [text] // simple array
let sep = [...text] // each character seprate
console.log(sep);

let fruits = ['apple','orange','mango'];
let vegetables = ['patatoes','onion','tamato']
// let add = [fruits,vegetables]
let add = [...fruits,...vegetables]
console.log(add);