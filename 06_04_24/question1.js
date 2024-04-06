// write  a program to print all the numbers from 1 to 100

for(let i=1;i<=100;i++){
    console.log(i);
}

// write a program to find the sum of all numbers from 1 to 100

let sum=0
for(let i=1;i<=100;i++){
    sum+=i
}
console.log(sum);


// write a  program to find the factorial of a given number

let fact =1
let num=5
for(let i=1;i<=num;i++){
    fact*=i
}
console.log(fact);

// write a program to check whether a give number is prime or not

let num1=19;
let count=0;

if(num1<=1){
    console.log("given number is not a prime number");
}
else{
    for(let i=2;i<=num1;i++){
        if(num1%i==0){
          count+=1
        }
        break
    }
    if(count==1){
        console.log("given number is not prime");
    }
    else{
        console.log("given number is prime");
    }
}

// write a program to print all prime numbers between two give numbers

function checkPrimeRange(a,b){
    let count1=0;
    let count2=0;
    for(let i=a;i<=b;i++){
        if(b%i==0){
            count1+=1
            break
        }
        else{
            count2+=1
        }
        return count2;
    }
}


let num2=3;
let num3 = 20;

console.log(checkPrimeRange(num2,num3));

// write a program to find the sum of digit of a given number

// let sum1=15;
// let sum_Digit=0
// for(let i=0;i<sum1;i++){
   
// }
// console.log(sum_Digit);

// write a program to reverse a grive number

// let number1=51
// let reverse =0;

// for(let i=0;i>=number1.length;i++){
//     reverse+=number1[i]
// }
// console.log(reverse);

// write a program to check whether a given number  is pallindrom or not
let name1 = "nitin";
let check_pallindrom="";
let count4 =0;

for(let i=name1.length-1;i>=0;i--){
   check_pallindrom+=name1[i]
}
if(name1==check_pallindrom){
    console.log("given string is pallindrom");
}
else{
    console.log("give string is not pallindrom");
}
// write a program to generate the multiplication table for a given number

// let table =2;
// for(let i=1;i<=10;i++){
//     for(let j=2;j<=2;j++){
//         console.log(i*j);
//     }
// }


