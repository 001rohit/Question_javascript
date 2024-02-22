// Write a function to filter out even numbers from an array.

let arra = []
for(let i=1;i<=100;i++){
    arra.push(i)
}
for(let key of arra){
    if(arra[key]%2==0){
        console.log(arra[key])
    }
}
