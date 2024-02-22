// Write a function to find the intersection of two arrays.

let first_array =[1,2,3,4,6,7,8,9]
let second_array =[1,2,31,6,10,17,8,9]
let new_arr = []
for(let i =0 ;i<first_array.length;i++){
    for(let j=0;j<second_array.length;j++){
        if(first_array[i]===second_array[j]){
           new_arr.push(first_array[i]);
        }
    }
}
console.log(new_arr)