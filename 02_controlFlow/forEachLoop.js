const coding = ["js","ruby","python","cpp"];

//since the function in the loop then it 
// is a call back function and this type of function does not require an name 


// coding.forEach( function (val){
//     console.log(val)
// })


// coding.forEach((items)=>{  //here we have used arrow function
//     console.log(items)
// })

function printMe(items){
    // console.log(items);
}
coding.forEach(printMe);

coding.forEach((items, index, arr)=>{
    // console.log(items, index, arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    },
    {
        languageName: "Ruby",
        languageFileName: "Rb"
    }
]

myCoding.forEach((items)=>{
    // console.log(items.languageFileName);
    console.log(items.languageName);
})