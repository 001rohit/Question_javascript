// Write a function to map each element in an array to its square.
let arr = []
for(let i =1;i<=20;i++){
    arr.push(i)
}
let square = arr.map((value)=>value*value)
console.log(square)