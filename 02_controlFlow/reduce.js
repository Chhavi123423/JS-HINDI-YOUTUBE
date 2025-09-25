const myNums = [1,2,3]

const total = myNums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0);

//const total = myNums.reduce((acc, curr) => acc + curr, 0) 

console.log(total);