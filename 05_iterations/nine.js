//Reduce Method In Js
const myNums = [ 1, 2, 3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval : ${currval}`)
//     return acc + currval
// }, 0) // 0 is the initial Value

const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price:  999
    },
    {
        itemName: "py course",
        price:  5999
    },
    {
        itemName: "Data Science",
        price:  14999
    },
    {
        itemName: "Moblie Dev",
        price:  6999
    },
                            // Task Add all the Prices
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)

console.log(priceToPay);
