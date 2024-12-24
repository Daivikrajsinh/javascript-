// Array With Functions Push ,Pop, shift, unshifts, Splice string function
let array = [23, 65, 89, 67];
// push is a array method  not string method
const store = array.push("pubg");
console.log(store, "array length return from push");
array.push("freefire");
console.log(array);
const store2 = array.pop();
console.log(store2);
// array.pop()
// array.pop()
console.log(array);
// array.shift()// shift method  remove from starting in array
const shiftStore = array.shift();
console.log(shiftStore);
console.log(array);
// array.unshift("batman") unshift method add in starting in array
const unshiftStore = array.unshift("batman");
console.log(unshiftStore);
console.log(array);
const array2 = [12, 34, 95, 45, 39, 91, 39, 59, 7, 88, 12];
//splice
const storeArray2 = array2.splice(1, 2); // in first argument you have to give where to start in second argument you have how many elements you have to remove
console.log(array2);
console.log(storeArray2);
// splice work on array its splice change array
// mutable   immutable js
// let string = "hello"
// string = string +"world"
// console.log(string)
// slice
let sliceArray = [23, 45, 39, 91, 39, 59, 100];
const sliceStore = sliceArray.slice(1,4) // in first argument where to start in second where to stop // and dont change original array
console.log(sliceStore); 
let stringSlice = "hellofromjavascript"
const stringStore = stringSlice.slice(9,stringSlice.length)
console.log(stringStore);
