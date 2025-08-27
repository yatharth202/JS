const  myObject = {
    js :  'javascript',
    cpp: " C++",
    RB: " Ruby",
    swift :  " Swift by apple"
}

for (const key in myObject) { // forin loop for objects
    console.log(`${key} for shortcut  is for ${myObject[key]} `);
}

const programming = [" js" , "rb", "py", "java" , " cpp" ]

for(const key in programming){
    // console.log(key); 
    console.log(programming[key])// forin loop for objects for array aswell
}

const map = new Map() // Map is a Object which holds key value pairs and remembers the original insetion order of the keys

map.set('IN', "India")
map.set('USA', "United States of Ameraica")
map.set('Fr' , "France")
map.set('IN', "India") // will not add because unique elements rahate hai map mai 

for (const key in map) {
    console.log(key); // map is not iteratable so it wont work
}

// map ----> forof loop
// object array----> forin loop

