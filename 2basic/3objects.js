//object literals

let objectnew = {
   "full name":"amritanshshukla",
   name: "amritansh",
   surname:"shukla",
   phone_no:9933223232,
   email:"amritansh@gmail.com"
}

/*
console.log(objectnew.email);//not a good method to find the value;
console.log(objectnew["full name"]); // use this method to access the value in objects
*/
// want to change the particular value in objectnew

objectnew.name = "ami";
// console.log(objectnew.name);
// you can freeze the object also so that change in that object will not be updated.
// Object.freeze(objectnew);

objectnew.greeting = function(){
   // console.log("hello");
   // return 1;

}

objectnew.greetingtwo = function(){
   console.log(   `hello from ${this.name}`);
   return;
}

console.log(objectnew.greeting); // giving the reference
console.log(objectnew.greetingtwo()); // giving the reference

