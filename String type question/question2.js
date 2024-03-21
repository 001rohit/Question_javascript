// Write a JavaScript function that reverses a string.

// with method
let string = "hellow welcome"
let rever  = string.split("").reverse().join("")
console.log(rever);

// without method

let reverse=""
for(let i=string-1;i<0;i--){
    rever+=string[i]
}
console.log(rever);