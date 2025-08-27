// singleton

const tinderUser = new Object()

tinderUser.id= "123abc"
tinderUser.name = "Sammy"
tinderUser.IsLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname:{
            firstname:"Yatharth",
            lastname : "Patel"
        }

    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1,obj2};
// console.log(obj3);

// const obj5 = Object.assign({}, obj1, obj2, obj3)

// console.log(obj4)

// const obj4 = {...obj1,...obj2,...obj3} // SPREAD method
// console.log(obj4);

// const users =[
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     }
// ]

// console.log(users[1].email)

// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // keys will covert into array data type which is very imp
console.log(Object.values(tinderUser)); // values will convert into array 
console.log(Object.entries(tinderUser)); // array ke ander array key and vaules ka seprate values array data type

console.log(tinderUser.hasOwnProperty('IsLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))