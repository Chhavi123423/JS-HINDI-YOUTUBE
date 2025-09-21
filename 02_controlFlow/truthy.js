const userEmail = "chhavi@gmail.com";

// if(userEmail){
//     console.log("GOt user email");
// }else{
//     console.log("dont have userEmail");
// }

//falsy value
//false, 0, -0, BigInt, "", null, undefinded, NAN

//truthy value
//"0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is Empty");
}else{
    console.log("AARray is not empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("THe array is empty");

}else{
    console.log("the array is ot empty");
}

//nullishing coalesing Operator(??) : null undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

console.log(val1);

//ternary operator

//condition ? true : false
