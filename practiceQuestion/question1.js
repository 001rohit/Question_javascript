// Write a function to find the maximum number in an array.

let arr1 = [2,3,4,356,57,12,56]
var max =0
max = arr1[0]
for(let i = 0; i<arr1.length;i++){
     if(arr1[i]>max){
        max = arr1[i]
     } 
    }
    console.log(max)