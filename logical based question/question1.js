// Write a JavaScript program to check if a number is between 1 and 100.

let num = 20
let check;
for(let i=1;i<=100;i++){
    if(num==i){
         check=true
         break
    }
    else{
        check = false
    }
}
console.log(check);