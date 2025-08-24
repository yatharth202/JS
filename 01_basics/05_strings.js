const name = "Yatharth"
const repoCount = 50


console.log(name + repoCount + "Value");

console.log(`Hello my name is  ${name} and my repo count is ${repoCount} `  );


const gameName = new String('yatharth-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__); // prototype

console.log(gameName.length)
console.log(gameName.toUpperCase()); // original value change nahi hui hai means it is stored in stack
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);


const anotherString = gameName.slice(-8,4); // ulati string can be used 
console.log(anotherString);

const newStringOne = "   hitesh     ";

console.log(newStringOne);
console.log(newStringOne.trim()); //remove spaces

const url = "hhtps://hitesh.com/hitesh%20choudhary"


console.log(url.replace("%20","-")); // replace %20 with - 

console.log(url.includes("sundar")); // search sundar in string

console.log(gameName.split("-")); //convert into array








