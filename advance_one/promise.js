const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls
    setTimeout(function(){
        console.log("async task is completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise is consumed");
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2 completed")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chhavi", age: "19"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "chhavi", age: "19"})
        }else{
            reject("ERROR: Something Went wrong ")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
})
.then(function(user){
    console.log(user)
})
.catch(function(er){
    console.log(er)
})
.finally(function(){
    console.log("promise is either resolved or rejected")  
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "chhavi", age: "19"})
        }else{
            reject("ERROR: Something Went wrong ")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()
