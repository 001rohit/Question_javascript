// Write a for loop that checks if a number is prime.

let checkPrime = 41
let count = 0
if(checkPrime<=1){
    console.log("Not a prime number");
}
else{
    if(checkPrime>1){
        for(let i=2;i<checkPrime;i++){
            if(checkPrime%i==0){
                count+=1
                break
            }
        }
        if(count==1){
            console.log("Not a prime number");
        }
        else{
            console.log("This is a prime number");
        }
    }
}