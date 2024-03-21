// Write a JavaScript program to check if a year is a leap year and has 366 days.

let check = 6000
let res;
if(check%4==0 || check%400==0){
    res = `${check} is a leap year.In this year for total no. of day is 366`
}
else{
    res = `${check} is not a leap year.In this year for total no. of day is 365`
}
console.log(res);