// Write a function to remove duplicate elements from an array.

let arr = ["a","a","b","c","d","e","b"]
let res = arr.filter((item,index)=>arr.indexOf(item)===index)
console.log(res)
