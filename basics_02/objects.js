// singleton  -- if made from constructors then it can be singleton
// object literals


// Object.create // this is constructor way to create objects

const mySym = Symbol("key1") //declared a symbol

const JsUser = {
    name : "Priyanshu",
    "full name": "Priyanshu SIngh",     // always works as key value pairs
    age : 18,
    email: "priyanshuSingh@gmail.com",
    [mySym] : "mykey1",      // output => [Symbol(key1)]: 'mykey1'
    location: "Chennai",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}  //also a way to create objets

// console.log(JsUser.location);
// console.log(JsUser["full name"]); // these are the different ways to access objects
// console.log(JsUser[mySym]); // way to print symbol

// JsUser.email = "priyanshu@chatgpt.com"
// Object.freeze(JsUser)  // its restricts object value from changing
// JsUser.email = "priyanshu@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);  // this is string interpolation "this" is used to access objects
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

