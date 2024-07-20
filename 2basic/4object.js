const tinder = new Object();
const tinder2 = new Object();

tinder2.fullname = {
   userfullname:"ram",
   email:"nah@gmail.com",
   namei:"amritansh"
}

console.log(tinder2.fullname);
console.log(tinder2.fullname.userfullname);

const obj1 ={1:"a",2:"b"};
const obj2 ={3:"c",4:"d"};
const obj3 ={5:"c",6:"d"};

const obj4 = Object.assign({},obj1,obj2,obj3);
console.log(obj4);


//something form database values are  given in the form array and in array values are 
// in the form of objects

const usersss = [
   {},
   {
      username:"amritansh shukla",
      email:"n@gmail.com",
   },
   {

   }
]

// it can be access as normal array and object type

console.log(usersss[1].username);

// here obj4 four have some key value pair u want to make array of keys and array of value seprately

console.log(Object.keys(obj4));//gives array of keys
console.log(Object.values(obj4));//gives the array of values
console.log(Object.entries(obj4));//gives the objects as array and one big array stored it



