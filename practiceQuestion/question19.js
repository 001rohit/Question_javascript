// Write a function to count the occurrences of each element in an array.
let arr = [1,2,3,4,5,6,2,4,3,2,2,2]


let arr1= 0;
let x = 2;
for(let i=0;i<arr.length;i++){
    if(x==arr[i]){
        arr1++;
    }
}
console.log(arr1)


// let res = arr.forEach((value,index)=>{
//     if(value!=index){
//         arr1.push(value)
//     }
// })
// console.log(arr1)
