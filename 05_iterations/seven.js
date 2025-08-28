const myNumbers =  [1,2,3,4,5,6,7,8,9,10]


// const newNums = myNumbers.map( (num) => num + 10)
// const newNums = myNumbers.map( (num) => {return num + 10 })

// const newNums=[]

// myNumbers.forEach((num) => {
//    newNums.push(num+10)
// })


// console.log(newNums) // using maps for the exact same thing

//chaing

const newNums = myNumbers
                .map((num) => num*10)
                .map((num) =>num + 1 )
                .filter((num) => num>=40) // filter means True ya False wala game hai 


console.log(newNums);