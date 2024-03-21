// Write a JavaScript program to check if a number is a perfect square and greater than 100.

let num = 49;
let res;
for(let i=1;i<=num;i++){
    if(num>100){
        res = true
        break
    }
    else{
        res =false
    }
}
console.log(res);