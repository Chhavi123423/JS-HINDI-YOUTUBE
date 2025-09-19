const user = {
    username : "Chhavi",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Nikki";
// user.welcomeMessage();

console.log(this);//this refers to the current scope
//in browser this refers to window object
//in nodejs this refers to empty object

const tea1 = function(){
    console.log(this);
}
tea1();

const coffee = function(){
    let username = "Hello";
    console.log(this.username);
}
coffee();

const tea = () => {
    let username = "Hello";
    console.log(this.username);
}
tea();

//arrow function does not have its own this
//it takes this from its surrounding (lexical) scope
//arrow function is not suitable to be used as object methods

const addTwonum = (num1, num2) => { // explicitly retuen ehen you have{} and return keyword
    return num1 + num2;
}
console.log(addTwonum(5, 6));

const sumTwonum= (num1, num2) =>  num1 + num2; // implicit return  when you dont have {} and return keyword
console.log(sumTwonum(4, 7));