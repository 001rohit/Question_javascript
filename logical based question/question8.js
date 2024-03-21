// Write a JavaScript program to check if a number is a multiple of 3 but not a multiple of 9.

let num= 2
let res;
if(num){
  res =`${num} is not mulitple number 3 or 9`
}
else{
    if(num%3==0 && num%9!==0){
        res = `${num} is only multiple by 3`
    }
    else{
        res = `${num} is multple 3 or 9`
    }
}
console.log(res);