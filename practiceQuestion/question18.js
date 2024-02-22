// Write a function to remove falsy values (false, null, 0, "", undefined, and NaN) from an array.

let value = [1,2,3,"",null,undefined,true,"hellow"]
let newArr = []
value.forEach(element => {
    if(element){
        newArr.push(element)
    }
});
console.log(newArr)