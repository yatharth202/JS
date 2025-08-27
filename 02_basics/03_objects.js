// singleton

//object literals
// Object.create // another way called a constuster way and singleton is created in this way 

const mySym = Symbol("Key1");


const JsUser = {
    name : "Yatharth",
    "full name" : "Yatharth Patel",
    [mySym] : "mykey1",
    age:  21,
    location : "Jabalpur",
    email: "pyatharth41@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email="saritapatel7193@gmail.com"

// Object.freeze(JsUser)

JsUser.email= " Tashi@gmail.com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS User ");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

