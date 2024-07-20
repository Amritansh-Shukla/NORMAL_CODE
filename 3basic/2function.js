// rest operator

// when there is situation like you dont know about how many arguments will come then
// use the rest operator

function restopfun(...numss){
   return numss
}

function restopfun(numssss,numssss1,...numss){
   return numss;
}


console.log(restopfun(333,444,555));
console.log(restopfun(333,444,555,999)); // it gives [555,999];


// passing objects in function


function objtaker(anyobj){
   return `name is ${anyobj.username} and giving fees of ${anyobj.price}`;
}

//function call
console.log(objtaker({
   username:"amritansh shukla",
   price:"7777"
}))

// u can pass values , object , arrays
