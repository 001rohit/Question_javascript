// Write a function to find the union of two arrays.

let a = [2,3,4,51,6]
let b = [3,4,64,8,1,2]
let object = {}
for(let i =a.length-1;i>=0;--i){
    object[a[i]]=a[i]
}
for(let i = b.length-1;i>=0;--i){
    object[b[i]]=b[i]
}
let  finallArr = [];
for(let key in object){
    finallArr.push(object[key]);
}
console.log(finallArr)
