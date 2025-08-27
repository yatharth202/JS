const user ={
    username : "Yatharth",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
} 

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

console.log(this) //empty here but not in browers

// function chai(){
//     let username = "Yatharth"
//     console.log(this.username); // this doesnt work inside function only works inside object
// }

// chai();

// const chai = function(){
//     let username =  "Yatharth"
//     console.log(this.username);

// }

// const chai =() =>{
//     let username =  "Yatharth"
//     console.log(this);
//                              /// arrow function but still give undifiend and empty paraenties
// }


// chai();

// // const addTow = (num1,num2) => {
// //     return num1 + num2  // expliceted return means // return keyword is used
// }

// const addTow = (num1,num2) =>   num1 + num2 //second way 
   
// const addTow = (num1,num2) =>   (num1 + num2) // 3rd way  //impleset return means return key word is not used

const addTow = (num1,num2) =>   ({username : "Yatharthhh"})
// inorder to return object curly braces are must 
console.log(addTow(2,3))





