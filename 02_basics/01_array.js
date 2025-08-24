//array

const myArr = [ 0,1,2,3,4,5];

// console.log(myArr[0]); // Array copies are shallow copies means share same reference point means stored in heap memeory


// const myHero = [ "batman" , "spiderman"]

// const myArr2 =  new Array(1,2,3,4)

//Array Methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) // instert value at index 0 

// myArr.shift() // used to remove 0th index value 

// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // adds all the elements of the arry to a string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(myn2); // incudes range value and array gets manipulated that splice party get seprated from the original where as slice just make a copy of desired index

