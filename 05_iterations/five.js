// for each

const coding = [ " js" , "ruby" , "java" , " python" , "cpp"]

// coding.forEach(  function (item){
//     console.log(item);
// } ) // callback function doesnt have name

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // bas refrence dena hai usko execute nahi karna hai 

// coding.forEach( (item,index,arr)=> {  // contains or have items index and array ki list
//     console.log(item,index,arr);   
// })


const myCoding = [ // impppppppp
    {
        language :  "Javascript",
        languageFileName: "js"
    },
        {
        language :  "Java",
        languageFileName: "java"
    },
        {
        language :  "python",
        languageFileName: "py"
    },
        {
        language :  "C++",
        languageFileName: "cpp"
    }
]



myCoding.forEach( (item) => {
    console.log(item.language);
})