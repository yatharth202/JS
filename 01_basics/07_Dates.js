 //Dates

// let myDate= new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate =  new Date(2023, 0 , 23) //  Year Month Date
// let myCreatedDate =  new Date(2023, 0 , 23 , 5 , 3 ) //  Year Month Date  Hours minutes

// let myCreatedDate =  new Date("2023-01-14") // Starts with 01 not 00  // yy/mm/dd
// let myCreatedDate =  new Date("01-14-2023") // mm/dd/yy

// console.log(myCreatedDate.toLocaleString());


// let myTimeStamps = Date.now()

// console.log(myTimeStamps);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // convert in s from ms 


let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})
