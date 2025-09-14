//Array
const arr = [1, 2, 3, "chhavi", "High" , true];
const myHero = ["Ironman", "CaptainAmerica", "BlackWidow"];

console.log(arr[3]);
console.log(myHero.length);

//Array Method
arr.push(45);

// arr.pop(22);
console.log(arr);
console.log(arr.includes(9));
console.log(arr.indexOf(3));


//slice and splice
console.log("A", arr);
const arr1 = arr.slice(1, 3);
console.log("B", arr1);

/*SLICE
Returns: A new array with the extracted elements.
Original array is unchangeD
*/

const arr2 = arr.splice(1, 3);
console.log("C",arr2);
console.log(arr);

const arr3 = arr.splice(1, 0, 200,300);
console.log("D", arr);

/*SPLICE 
Purpose: To add, remove, or replace elements in an array.
It changes (mutates) the original array.
splice(start, removeNoOfELements, additem1, additem2.....);
*/

const dc_heroes = ["flash", "Superman", "thunderBolt"];
const marvel_heroes = ["thor","iron-man","widow"];

//console.log(marvel_heroes.concat(dc_heroes));
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

const all_heroes = [...dc_heroes, ...marvel_heroes];
console.log(all_heroes);

const array = [1, 2, 3, [4, 5, [6, 7, [8, 4, 1]]]];
const new_arr = array.flat(Infinity);//spread all the elements of the array
console.log(new_arr);

console.log(Array.isArray("Chhavi"));
console.log(Array.from("Chhavi"));
console.log(Array.from({name: "Chhavi"}));//can not convert key into arrY

let num1 = 1;
let num2 = 2;
let num3 = 3;
console.log(Array.of(num1, num2, num3));