const marvel = ["ironman","captain_america","loki","thor","hulk","vision"];
const dc     = ["superman","antman"];

const totalhero = marvel.concat(dc);
// console.log(totalhero);
//concat return new array with concatenated values.

const newheroes = [...marvel,...dc];
// console.log(newheroes);

console.log(Array.isArray("amritansh"));
console.log(Array.from("amritansh"));

