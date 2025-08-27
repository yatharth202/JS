
// let a =300 

// if( true){
//     let a = 10;
//     const b =20;
//     var c = 30;  
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// //console.log(a);
// //console.log(b);
// console.log(c); // print hoogya scope issue
  

function one(){
    const username = "Yatharth"

    function two(){
        const website =  "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two();
}

one();

if(true){
    const username = "Yatharth"
    if(username== "Yatharth"){
        const website = "youtube"
        console.log( username + website)
    }

    // console.log(website)
}

// console.log(username);

// ++++++++++++++++++++++++++++++ intresting +++++++++++++
console.log(addone(5)) // will not give error

function addone(num){
    return num + 1;
} // this is function 



addTwo(5) // will give error 
const addTwo =function(num){  // this is also function but also called expressions because it is holding values
    return num+ 2;
}

// addTwo(5)