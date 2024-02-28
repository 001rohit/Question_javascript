// write a program to reverse a string 

let name = "rohit kumre";
let reverse="";
// let reverseValue = name.split("").reverse().join("")
// console.log(reverseValue)

for(let i =name.length-1;i>=0;i--){
    // console.log(name[i])
    reverse+=name[i]
}
console.log(reverse)

