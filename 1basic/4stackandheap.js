//stack is used for primitive datatype and it gives copy so change in one variable
//does not effect the other variable


/* heap is used for non primitive datatype and it gives the reference of the value.
*/

let vari1 = 1234;
let vari2 = vari1;
vari2 = 2355;
console.log(vari2);
console.log(vari1);

// Non primitive type 

let userone = {
   email :"amritanshshukla@gmail.com",
   upiid : "123@oksbi"
}

let usertwo = userone ;
usertwo.email= "chotu@gmail.com";

console.log(userone);
console.log(usertwo);


