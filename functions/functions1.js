// You can declare function inside the variables. 
//Function expression/anonymous

//parameters
const sum = function(number1, number2){
    console.log(number1 + number2) 
    
}

sum(2,3) //arguments 


// Another example but with return 
const sum2 = function(number1, number2){
    let total = number1 + number2
    return total 
    
}

let number1 = 25
let number2 = 46

console.log(`the number 1 is ${number1}`)
console.log(`the number 2 is ${number2}`)
console.log(`the sum is ${sum2(number1, number2)}`)