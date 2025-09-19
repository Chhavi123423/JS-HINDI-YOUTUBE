
function addTwoNumbers (number1, number2){
    let result = number1 + number2;
    return result;
}

 //addTwoNumbers(3, 5)
//console.log( addTwoNumbers(3, 5));

// function loginUserMessage(username){
//     return `${username} just logged in`;
// }

// let login = loginUserMessage("Chhavi");
// console.log(login);

function loginUserMessage(username = "Nikki"){
    if(!username){
        console.log("please enter your username");
        return;
    }
    return `${username} just loggedin`;
}

console.log(loginUserMessage());

