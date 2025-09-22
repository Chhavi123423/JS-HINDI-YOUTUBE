//for of loop
//[" ", " ", " "]
//[{},{},{}]

const arr = [1,2,3,4,5];
for(let items of arr){
    // console.log(items);
}

const greetings = "Hello World!";
for(const char of greetings){
    if(char === " "){
        continue;
    }
    // console.log(char);
}

//Maps => known for there unique value if any value is repeating that it will consider only one value

const map = new Map();
map.set('IN', 'INDIA');
map.set('USA', 'UNITED STATE OF AMERICA');
map.set('FR', 'FRANCE');
//console.log(map);

for( const [keys, value] of map){
    // console.log(keys ,':-',value);
}
for(const key in map){
    console.log(key);  //map is not iterable in for in loop 
}


//will show error my object is not iterable.....there is some ither method for object.....this method will not work here
const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

for(const [keys, values] of myObject){
    console.log(keys,":-",values);
}