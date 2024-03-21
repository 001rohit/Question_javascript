// Write a JavaScript function that checks if a string is a palindrome.

let string = "rohit"
let palindrome1=""
let count = 0
for(let i=string.length-1;i>=0;i--){
    palindrome1+=string[i]
    
    
}
if(string==palindrome1){
    console.log("give string is pallindrom");
}
else{
    console.log("give string is not pallindrom");
}