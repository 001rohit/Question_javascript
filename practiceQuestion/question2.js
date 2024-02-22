// Write a function to find the minimum number in an array.


let arr1 = [2,1,4,0.1,356,57,12,56]
var min =0
min = arr1[0]
for(let i = 0; i<arr1.length;i++){
     if(arr1[i]<min){
        min = arr1[i]
     } 
    }
    console.log(min)