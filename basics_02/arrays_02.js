const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]
// console.log(marvel_heros);
// console.log(dc_heros);
//marvel_heros.push(dc_heros) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]); 

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);  //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

// const all_new_heros = [...marvel_heros, ...dc_heros]  // using this we can concat more than 2 values
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5],7,[6,7,9,3]]
// const real_another_array = another_array.flat(Infinity) //[   1, 2, 3, 4, 5, 7,6, 7, 9, 3]

// console.log(real_another_array)

// console.log(Array.isArray("Priyanshu"));
// console.log(Array.from("Priyanshu")); //['P', 'r', 'i', 'y', 'a', 'n', 's', 'h', 'u' ]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]



