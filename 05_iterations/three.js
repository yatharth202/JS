// for of

// const arr =  [ 1 , 2 , 3 , 4 , 5]

// for (const i of arr) {
//     console.log(i);
// }

// const greetings = "Hello World!"

// for (const i of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// // maps

const map = new Map() // Map is a Object which holds key value pairs and remembers the original insetion order of the keys

map.set('IN', "India")
map.set('USA', "United States of Ameraica")
map.set('Fr' , "France")
map.set('IN', "India") // will not add because unique elements rahate hai map mai 

console.log(map);

for (const [key,value] of map) {
    console.log(key , " :-" , value);

}

const myObject = {
    'Game1'  : 'NFS',
    'Game2'  : "SpiderMan"
}

for (const [key,value] of map) {
     console.log(key , " :-" , value); // will not itetrate in objects
}