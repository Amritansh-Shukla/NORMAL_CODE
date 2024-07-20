const course = {
   coursename:"js in easy way",
   price:1000,
   courseinstructor:"ami"
} 

//Destructuring 
// easy way
course.courseinstructor;

// but more used way is 

const {courseinstructor:instructor} = course // {key:name_u_want_to_give}=object;

console.log(instructor);


