// Write a function to calculate the average of numbers in an array.

let AverArr =[1,2,3]

let sumOfArr = AverArr.reduce((pre,curr)=>pre+curr)
let res  = sumOfArr/AverArr.length
console.log(res)
