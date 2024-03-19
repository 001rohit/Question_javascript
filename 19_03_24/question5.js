// Write a for loop that iterates over an array and prints each element.
let root = document.getElementById("root")
let array = [1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }
let a=0
while(a<array.length){
    for(let i=0;i<a;i++){
    let div = document.createElement("div")
    console.log(array[i]);
    div.innerHTML = `${array[i]}`
    root.appendChild(div)
}
a++
}