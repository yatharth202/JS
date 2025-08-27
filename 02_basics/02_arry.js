const marvel_heros=["Thor", "Ironman", "spiderman "]
const dc_heros = ["superman","falsh","batman"]

// marvel_heros.push(dc_heros)

console.log(marvel_heros); //array ke ander anrray dega merge nahi hoga

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);  // creates a new array while combining them


const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)   // creates a new array while combining them called SPREAD


const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array= another_array.flat(Infinity);  // gives a single array of all the messy elements
console.log(real_another_array)


console.log(Array.isArray("Yatharth"))
console.log(Array.from("Yatharth"))  // coverts into array
console.log(Array.from({name : "Yatharth"}))  // imp gives empty string


let score1= 100;
let score2= 200;
let score3= 300;

console.log(Array.of(score1,score2,score3)) // creates array from elements 