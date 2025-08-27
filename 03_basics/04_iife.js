// immediately Invoked Function  Expression (IIFE)
(function chai (){
    //Named IIFE
    console.log(`DB CONNECTED`);
})(); // ; this is necararay to end this and move on 
 //  global scope ke pollution hoti hai kafi bar to to uss pollution ko hatane  ke liye hamne IIFE ka use kara and ye immidietly execute hojati hai  
// chai();


((name) => {
    //without Named IIFE
    console.log(`DB CONNETED TWO ${name}`);
})("Yatharth") ;

