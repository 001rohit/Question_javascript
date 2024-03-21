// Write a JavaScript function that removes all non-alphanumeric characters from a string.
const str = 'he@656llo wor?ld';
const isAlphaOrSpace = char =>((char.toLowerCase() !==char.toUpperCase())|| char===' ');

const removeSpecial = (str='')=>{
    let res = '';
    const {length:len}=str;
    for(let i=0;i<len;i++){
        const el=str[i];
        if(isAlphaOrSpace(el)){
            res+=el;
        };
    };
    return res;
}
console.log(removeSpecial(str));