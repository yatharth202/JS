// function sayMyName(){
//     console.log("Y");
//     console.log("A");
//     console.log("T");
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("T");
//     console.log("H");
// }

// sayMyName // reference
// sayMyName() // calling or execution of function

// function addTwoNumbers(number1,number2){ //parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){ //parameters
    
    // let result = number1 + number2
    // return result
    // console.log(Hitesh)

    return number1 + number2
}


const result = addTwoNumbers(3,7); //arguments
addTwoNumbers(3,"7");
addTwoNumbers(3,"a");
addTwoNumbers(3,null);

console.log(result);


function loginUserMessage(username = "sam") { // default value means kafi empty ya undined value nahi jayegi 
    if(!username){ // " empty string , undifined === false"
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Yatharth"))
// console.log(loginUserMessage("")) //empty string
console.log(loginUserMessage()) // undifined ataa hai not null


//User cart 

function calculateCartPrice(val1,val2, ...num1){ // rest operator and spread operator both have same syntax just depends on use case // here gives an array if multiple arguments are passed
    return num1
}

console.log(calculateCartPrice(200,400,500,2000)) // val1=200,val2=400, baki array mai 500,2000



const user = {
    username : "Yatharth",
    price : 199
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    username: "sam", // fucntion ke ander  hiu bana diya 
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,400,500,1000]))