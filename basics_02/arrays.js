// javascript arrays are resizable and can contain mix of different datatypes
// javascript create shallow copies means it will change the reference points or original copies

const myArr = [0, 1, 2, 3, 4, "Priyanshu"];
// const myHeroes = ["shaktiman", ""];
// console.log(myArr[5]);  // Outputs: "Priyanshu"
// console.log(myArr);     // Outputs: [0, 1, 2, 3, 4, "Priyanshu"]
// const myArr2 = new Array(1, 2, 4, 5, 6);
// console.log(myArr2[2]); // Outputs: 4

// Arry Methods

myArr.push(7)
myArr.push(6)
myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // this converts array in string
// console.log(newArr);
// console.log(myArr);

//slice, splice
//splice manipulates original array by removing the given range
// slice only writes the number range that is provided . e.g (1,3) 3 will not be included

console.log("A "+ myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B "+ myArr);

const myn2 = myArr.splice(1,3)
console.log("C " + myArr);
console.log(myn2);


