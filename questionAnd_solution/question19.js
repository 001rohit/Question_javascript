// Write an if-else statement that checks if a variable w is a prime number. If it is, log "w is a prime number" to the console. Otherwise, log "w is not a prime number".

let w= 11
let count =0
if(w<=1){
    console.log("w is not a prime number");
}
else{
    if(w>1){
        for(let i=2;i<w;i++){
            if(w%i==0){
                count+=1
                break
            }
        }
        if(count==1){
            console.log("w is not a prime number");
        }
        else{
            console.log("w is prime number");
        }
    }
    

}