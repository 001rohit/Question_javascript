// var name1 = "bob"
// var CheckPallindrom = " "
// for(let i=name1.length-1;i<0;i--){
//     CheckPallindrom+=name[i]
// }
// console.log(CheckPallindrom)
// console.log("hellow")
// let name = "rohit kumre";
// let reverse="";
// for(let i =name.length-1;i>=0;i--){
//     // console.log(name[i])
//     reverse+=name[i]
// }
// console.log(reverse)
// var value = "nitin"
// var CheckPallindrom1 = " "
// for(let i=value.length-1;i>=0;i--){
//     CheckPallindrom1+=value[i]
// }
// console.log(CheckPallindrom1)


// var CheckPallindrom1 = " "
// function CheckPallindrom(value){
//     var CheckPallindrom1 = " "
// for(let i=value.length-1;i>=0;i--){
//     CheckPallindrom1+=value[i]
// }

// console.log(value,"=",CheckPallindrom1)
     
//      return CheckPallindrom1
// }
// var name2 = "nin"
// let finalName = CheckPallindrom(name2)
// console.log(CheckPallindrom1)
// if( name2==finalName){
//     console.log("Give string is pallindrom")
// }
// else{
//     console.log("Give string is not pallindrom")
// }


var value = "nitin"
value = value.toLocaleLowerCase()
var CheckPallindrom1 =""
for(let i=value.length-1;i>=0;i--){
        CheckPallindrom1+=value[i]
}

console.log(value,"=",CheckPallindrom1)

if(value==CheckPallindrom1){
    console.log("give string is pallindrom")
}
else{
    console.log("give string is not pallindrom")
}