//Primitve
//Copy banata hai not & wala 
// 7 types : String ,Number ,Boolearn,null,Symbol,BigInt

// const score=100
// const scoreValue= 100.3

// const isLoggedIn =  false 
// const outsideTemp=null
// let userEmail;

//decalar symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34534434343184343n

// Reference Type or Non Primitive DataType
//Array, object , functions 

const heros = ["shaktiman" , "naagraj" , "doga"]
let myObj = {
    name: "Yatharth",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object