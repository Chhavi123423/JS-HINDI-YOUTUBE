
function addTwoNumbers (number1, number2){
    let result = number1 + number2;
    return result;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

 //addTwoNumbers(3, 5)
//console.log( addTwoNumbers(3, 5));

// function loginUserMessage(username){
//     return `${username} just logged in`;
// }

// let login = loginUserMessage("Chhavi");
// console.log(login);

function loginUserMessage(username = "Nikki"){
    if(!username){
        //console.log("please enter your username");
        return;
    }
    return `${username} just loggedin`;
}

//console.log(loginUserMessage());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

function calculatedCartPrice (val1, val2, ...num1){
    return `${val1} ${val2} ${num1}`;
}
// console.log(calculatedCartPrice(200, 400, 600, 800));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


const user = {
    username : "Chhavi",
    price : "199"
}
function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
    
}
handleObject({
    username : "Sam",
    price : "299"
});
//console.log(handleObject(user));


const myNewArray = [20, 30, 40];

function returnSecondValue (getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));