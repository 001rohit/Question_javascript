// Write a JavaScript function that converts a string to title case (capitalize the first letter of each word).

let str = "geeks for geeks"
let str1 = str.toLowerCase().split(' ');
for(let i=0;i<str1.length;i++){
    str1[i] = str[i].charAt(0).toUpperCase()+str1[i].slice(1)
}
console.log(str1.join(' '));