// Write a JavaScript function that counts the number of vowels in a string.

let  str = "hellow welcome"
let listVowel = "aeiou"
let count = 0;
for(let i=0;i<str.length;i++){
    if(listVowel.indexOf(str[i])!==-1){
        count+=1;
    }
}
console.log(count);