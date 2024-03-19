// Write a for loop that finds the largest element in an array.

let arr1 = [1,2,3,54,6,7,34]
let max = arr1[0]
for(let i=0;i<arr1.length;i++){
    if(arr1[i]>max){
           max = arr1[i]
    }
}
console.log(max);