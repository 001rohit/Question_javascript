// Declare a variable x and assign it a value of 10.

let x = 10
console.log(x);

// Declare a variable name and assign it your name as a string.

let name = "Rohit"
console.log(name);

// Declare a variable isTrue and assign it a boolean value of true.

let isTrue = true
console.log(isTrue);


// Declare a variable numbers and assign it an array of numbers [1, 2, 3, 4, 5].

let array =[1, 2, 3, 4, 5]
console.log(array);


// Declare a variable person and assign it an object with name and age properties.

let userObject = {
    name:"yogesh",
    age:27,
}
console.log(userObject);


// Declare a variable sum and assign it the result of adding x and 5.

let a = 5;
let b = 10;
let sum = a+b;
console.log(sum);

// Declare a variable message and assign it a string that concatenates name and a greeting message.
let name1 = "rohit kumre"
let message = "Hi my name is "+name1
console.log(message);

// Declare a variable isEven and assign it a boolean value that checks if x is even.
// let  status;
// let num = 21
// if(num%2==0){
//     status= true
// }
// else{
//     status = false
// }
// console.log(status);

// Declare a variable total and assign it the sum of all numbers in the numbers array.
let val1 = [2,3,4,5,6,7]
let sum_all=0
for(let i=0;i<val1.length;i++){
    sum_all+=val1[i]
}
console.log(sum_all);


// Declare a variable firstNumber and assign it the first element of the numbers array.

let firstNumber = [2,3,4,5]
firstNumber.unshift(1)
console.log(firstNumber);

// Declare a variable lastNumber and assign it the last element of the numbers array.
let array2 = [2,3,4,5,6]
array2.push(7)
console.log(array2);

// Declare a variable fullName and assign it the result of concatenating the firstName and lastName variables.

// let firstName1 ="Rohit"
// let lastName1 = " kumre"

// let fullName1 = firstName1.concat(lastName1)
// console.log(fullName1);


// Declare a variable isAdult and assign it a boolean value based on whether age is greater than or equal to 18.

let age = 20
let res = age>18?"you are a adult":"you are a child"
console.log(res);

// Declare a variable doubledNumbers and assign it an array that doubles each number in the numbers array.

let double = [2,3,3,4,5,4,5,7,8,7]
let unique = []
for(let i=0;i<double.length;i++){
    if(unique.indexOf(double[i])==-1){
           unique.push(double[i])
    }
}
console.log(unique);

// Declare a variable sortedNumbers and assign it the numbers array sorted in ascending order.

let num = [4,3,6,7,1,2]
// num.sort()
console.log(num);
console.log(num.sort());

// Declare a variable indexOfThree and assign it the index of 3 in the numbers array.

