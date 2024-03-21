// Write a JavaScript function that counts the number of words in a string.

let str = "welcome to the hellow world"
let count =0
let check = false
for(let i=0;i<str.length;i++){
    if(str[i]!==' '&& !check){
        count++;
        check=true;
    }
    else if(str[i]==' '){
        check = false;
    }
}
console.log(count);
