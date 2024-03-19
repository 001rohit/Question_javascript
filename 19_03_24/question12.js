// Write a for loop that reverses the elements in an array.

let arra1 = [1,2,3,4,5,6]
let reverse =[]
for(let a=arra1.length-1;a>=0;a--){
    reverse.push(arra1[a])
}
console.log(reverse);