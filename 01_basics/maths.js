const score = 100;
console.log(score);

const balance = new Number(1200);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const number = 200.987;
console.log(number.toPrecision(2));

const hundred = 100000;
console.log(hundred.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++++//
console.log(Math);
console.log(Math.abs(-98));
console.log(Math.round(9.7));
console.log(Math.ceil(4.2));
console.log(Math.min(2,5,6,1));

console.log(Math.random());// will always give the value between 0 andd 1

console.log(Math.floor(Math.random()*10)+1);//math.floor wil always give the lower value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);//so here what happen we get the random value between 0 and 1 and then multiplied with 10+1