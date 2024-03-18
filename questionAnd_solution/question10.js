// Write an if-else statement that checks if a variable g is NaN. If it is, log "g is NaN" to the console. Otherwise, log "g is not NaN".

let g = 1
if(isNaN(g) || g.toString()==""){
    console.log("g is NaN")
}
else{
    console.log("g is not NaN")
}