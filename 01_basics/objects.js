//object literal

const mySym = Symbol("key1");

const jsUser = {
    name: "nitya",
    age: "18",
    [mySym]: "key1",
    location: "udaipur",
    email: "nitya78@gmail.com",
    isLoggedIn: false,
    LastLoggedIn: ["Sunday", "Saturday"]
}
console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser.mySym);

jsUser.name = "Neha";
// Object.freeze(jsUser);
jsUser.name = "Sneha";
console.log(jsUser);

jsUser.greeting = function(){
    console.log(`hello ,${this.name}`);
}
console.log(jsUser.greeting());