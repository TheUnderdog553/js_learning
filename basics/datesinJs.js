let myDate = new Date() // date is object
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(typeof myDate); //object

// let myCreateDate = new Date(2024, 4, 19,3)
// console.log(myCreateDate.toDateString());

// let myCreateDate1 = new Date("2024-05-19")
// console.log(myCreateDate.toDateString());

// let myCreateDate2 = new Date("19-05-2024")
// console.log(myCreateDate.toDateString());
//console.log(Math.floor(Date.now()/1000));//values in seconds
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// ${newDate.getDay()} and the time

newDate.toLocaleString('default', {
    weekday: "long",
})
 




