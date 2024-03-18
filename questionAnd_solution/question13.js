// Write an if-else statement that checks if a variable j is truthy. If it is, log "j is truthy" to the console. Otherwise, log "j is falsy".
let array =["",0,null,1,2,3,4]
array.forEach((item)=>{
    if(item){
        console.log(`This is a truthy value ${item}`)
    }
    else{
        console.log(`This is falsy value ${item}`)
    }
})