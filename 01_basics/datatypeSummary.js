// # primary

const { useSyncExternalStore } = require("react");

//7. primitive types : string, number, boolean, null, undefined, symbol, bigInt

const value = 200;
const value1 = 200.5;

const isLoggedIn = true;
const outsideTemp = null;
let emailUser;

const id  = Symbol('123');
const newId = Symbol('123');

console.log(id === newId);

const bigNumber = 123456767654345n;

//# reference type or non-primitive

//arrays, objects, functions

const heros = ["shaktiman", "naagraj", "dogra"];
let myObj = { 
    name: "chhavi",
    age: 19
}

let myFunc = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunc);

//stack(primitive) and heap(non-primitive)

let youtube = "chhavi";
let youtubeChannel = youtube;
youtube = "nikki";

console.log(youtube);
console.log(youtubeChannel);

let userOne = {
    email: "haush@gmail.com",
    upi: 13243
}

let userTwo = userOne;

userTwo.email = "niikkk@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);