const temperature = 51;

if (temperature < 50){
    console.log("temperature is less than 50");
}
else 
console.log("temperature is greater than 50");

// <, >, <=, >=, ==, ===, !=, !==

const score = 200;

if(score >100 ){
    let power = "fly";
    console.log(`Userpower; ${power}`); 
}
// console.log(`User power: ${power}`); // error : power is not defined

const balance = 1000;

if (balance < 2000) console.log("balance"); // without scope only single line code can be executed.

// if else if also valide here

const userLoggedIn = true;
const debitCard = true;
const userloggedInGoogle = false;
const userLoggedInEmail = true;

if (userLoggedIn && debitCard){
    console.log("Allowed for shopping");
}

if(userLoggedInGoogle || userLoggedInEmail){
    console.log("User loggedin successfully");
}