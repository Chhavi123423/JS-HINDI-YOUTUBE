//for of loop does not work for object
//for in loop works for object

const myObject = {
    js: "JAVASCRIPT",
    cpp: "C++",
    swift: "SWIFT BY APPLE"
}

for(const keys in myObject){
    //console.log(`${keys} shortcut is for ${myObject[keys]}`);
    console.log(myObject[keys]);
}

const programming = ["js", "py", "JAVA", "cpp"];

for(const key in programming){
    //console.log(programming[key]);
    console.log(key);//In for of loop keys play different role but 
                     // in for in loop keys play different role in but only in array
}