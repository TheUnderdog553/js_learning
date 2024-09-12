function calculateCartPrice(val1,val2, ...num1){       // in this case spread operator is known as rest operator. Can be used to insert multiple uses
    return num1
}

// console.log(calculateCartPrice(200,400,500,1000));  // [ 500, 1000 ]

const user = {
    username : "Priyanshu",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price} `);
}

//handleObject(user)      //username is Priyanshu and the price is 199 

handleObject({
    username : "Priyanshu",
    price: "399"                //username is Priyanshu and the price is 399 
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray)); //100













