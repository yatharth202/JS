let score = "33abc"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber)

let score1 = null
console.log(typeof score1);
console.log(typeof (score1));

let valueInNumber1 = Number(score1);

console.log(typeof valueInNumber1);
console.log(valueInNumber1)

let score2 = undefined
console.log(typeof score2);
console.log(typeof (score2));

let valueInNumber2 = Number(score2);

console.log(typeof valueInNumber2);
console.log(valueInNumber2)

// "33" or number------ Number --- 33 (type of  original Number)
// "33abc" or string ------ Number ---- NaN (type of  original string)
// null ----- Number ---- 0 (typeof original object)
// Undefined ----- Number -----NaN (type of  original undefined)

let isLoggedIn=1
let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

let isLoggedIn1=""
let booleanIsloggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsloggedIn1);

let isLoggedIn2="Yatharth"
let booleanIsloggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsloggedIn2);


// 1 --- True
// " " ---- false
// "Yatharth " ---- True

let someNumber=33;
let stringNumber = String(someNumber);
console.log(someNumber);
console.log(typeof stringNumber);

