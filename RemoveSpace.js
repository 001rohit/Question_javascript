// write a program remove all the  space to  given string 

let name = "Rohit Kumre"
let removeSpace = " "
let StoreValue1 = ""

for(let i=0;i<name.length;i++){
    if(name[i]!=removeSpace){
            StoreValue1+=name[i]
    }
}
console.log(StoreValue1)

// let value1 = "abcdefghijklmnopqrstuvwxyz"
// let remveValue = "j"
// let StoreValue = ""
// for(let i=0;i<value1.length;i++){
//     if(value1[i]!=remveValue){
//         StoreValue+=value1[i]
//     }
// }
// console.log(StoreValue)
