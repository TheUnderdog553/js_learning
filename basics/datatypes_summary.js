//how we keep data in memory and access it is divided in two categories: primitive and non- primitive data types

//Primitive => call by value ...always value is provided as copy..not original

// 7 types: String, Number, Boolean, null, Undefined, Symbol(use to make any value unique),BigInt


//Reference or Non Primitive datatypes

//Array, Objects, Functions

// javascript is dynamically typed language => we don't need to define type 
// example const Bob = 32 or const Bob = "Hello Wolrd!!"

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId)
// console.log(id == anotherId); //these both are not same

// const bigNumber = 65156196031n
// const heros = ["skatiman", "naagraj", "doga"];  //arrays
// let myObj = {
//     name: "priyanshu",
//     age: 20,  // objects
//  }
//  const myFunction = function(){
//     console.log("Hello World");
    
//  }
// console.log(typeof bigNumber); // return type is bigInt
// console.log(typeof myFunction); //return type is function
// console.log(typeof heros);   // return type is object
// console.log(typeof myObj); //return type is object

//+++++++++++++++++++++++++++++++++++++++++++

// stack(Primitive datatypes), Heap (non Primitve datatypes)

let userOne = {
   email: "user1@google.com",
   upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "priyanshu@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);