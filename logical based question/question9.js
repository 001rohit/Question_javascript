// Write a JavaScript program to check if a number is a multiple of 4 and 7.

let num = 32

 if(num%4==0 && num%7==0){
 res = `${num} is multiple 4 or 7`
}
else if(num%4==0){
 res = `${num} is multiple 4`
}
else if(num%7==0){
    res = `${num} is multiple 7`
   }
else{
    res = `${num} is not muliple 4 and 7`
}
console.log(res);