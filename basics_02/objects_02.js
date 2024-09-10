// const hingeUser = new Object()   //=> singleton object

const tinderUser = {}   // non singleton object
tinderUser.id = "123"
tinderUser.name = "ansh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  

const regularUser = {
    fullname: {
        userfullname:{
            firstName : "Priyanshu",
            lastName : "Singh"
        }
    }
}
// console.log(regularUser.fullname.userfullname); // { firstName: 'Priyanshu', lastName: 'Singh' }

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
// const obj3 = Object.assign({},obj1,obj2)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ... obj2}    // spread operator
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123', 'ansh', false ]
// console.log(Object.entries(tinderUser));    //[ [ 'id', '123' ], [ 'name', 'ansh' ], [ 'isLoggedIn', false ] ]
// console.log(Object.hasOwnProperty("name")); //true => to chk if property exists



const course = {
    courseName : "JS in Hindi",
    courseInstructor : "Priyanshu",
    coursePrice : "999"
}
//course.courseInstructor
const {courseInstructor} = course
const {courseInstructor: Instructor} = course //destructuring the object
console.log(Instructor);

// {
//     "name" : "priyanshu",
//     "coursename" : "js in hindi"   //json
// }



