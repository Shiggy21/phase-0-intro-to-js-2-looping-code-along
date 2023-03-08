// Code your solutions in this file
const name = []
function writeCards(name, message){
    const array = []
    //const nameLength = name.length
    for(let i = 0; i <= name.length -1; i++){
        array.push(`Thank you, ${name[i]}, for the wonderful ${message} gift!`)
    }
    return array
}
function countDown(n){
    let count = n
    while(count >= 0){
        console.log(count)
        count--
    } 
}