function one(){
    const username = "Chhavi";//gkobally scoped

    function two(){
        const website = "Youtube"; // block scoped
        console.log(username);
    }
    //console.log(website);

    //two();
}
one ();

if(true){
    const username = "Chhavi";
    if(username === "Chhavi"){
        const website = "GIThub";
        console.log(`${website} and ${username}`);
    }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
console.log(addOne(6));//can acces "addOne " before Initaialistaion
function addOne(num1){
    return num1 + 1;
}
// console.log(addOne(6));




//console.log(addTwo(6));//cannot acces 'addTwo' before Intialisation
const addTwo = function (num1){ //expession
    return num1 + 2
}
console.log(addTwo(6));