function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");    
}

function addTwoNum(number1, number2){   // we are entering here parameters
     console.log(number1 + number2);
}

function addTwoNum1(number1, number2){   // we are entering here parameters
    return number1 + number2
}
// addTwoNum("5",4) // 54
// addTwoNum(5,4)  // 9    => we are entering here arguments

const result = addTwoNum(6,4)   // 10 undefined => becoz we are not returning anythng from function
// console.log(result);    

const result1 = addTwoNum1(5,4)   // 9   => becoz we are  returning result from function
// console.log(result1); 

function loginUsername(username){       //can give default value as loginUsername(username = "sam" )
    if(username == undefined){          // if(!username){   }
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
loginUsername("Priyanshu")  // prints nothing coz we have returned value but not instructed it to print
console.log(loginUsername("Priyanshu"));    // Priyanshu just logged in
console.log(loginUsername());   //undefined just logged in



