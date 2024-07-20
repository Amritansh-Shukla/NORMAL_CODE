const number = 1000;

const balance = new Number(1000);
console.log(balance.toFixed(2));//decimal upto how much digit
console.log(balance.toPrecision(3)) // means before point only precise upto 3 digits


const hundred = new Number(1000000);
//want comma in indian style between  heavy numbers
console.log(hundred.toLocaleString('en-IN'));


//Math

// console.log(Math.round(54.43));
// console.log(Math.ceil(34.54));

//Math.random

console.log(Math.random());//gives number between 0 and 1.
console.log((Math.random()*10 + 1).toFixed(0)) //gives number between 1 to 10;

// you want some number between the min and max then there is formula see

//++++++++++++++
const max = 10;
const min = 4;
console.log(Math.floor((Math.random()*(max - min + 1)) + min));
