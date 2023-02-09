//Expressions and Operators 

// expresion is any code line that resolve something on the js

let number = 1

console.log(number +1) //binary

//console.log(++number); //unary, increment
console.log(--number);//decrement

console.log(typeof number) //operador unario, esta defininfo o tipo do number

console.log ( true? 'alo' : 'nada') //ternary. if its true, than it show "alo", and if its false, it show "nada"

//new- expression that creates a new object 

let names = new String('jade')
names.surnName = 'siebra'
let age = new Number('25')
console.log(names,names.surName, age);

let date = new Date ('2023-01-17')
console.log(date) 

//operators unary: typeof and delete 
const person ={
    age:'24',
    city:'fortaleza',
}
console.log(typeof 24);
delete person.city

console.log(person)

//remainder from the division(resto da divisao)
let remainder
remainder = 11 % 9
console.log(remainder)

//increment ++ increment always will be the sum of one more in the number.
let increment = 2
increment++
console.log(++increment);/* se colocar detro do console, porem depois do nome, sera incrementado depois. se for colocado antes do nome, sera invcrementado antes */

//decrement --
let decrement = 0
decrement--
console.log(decrement);

//expotencial **
console.log(2**3);

//Grouping operator () - operator that will agroup expressions. 

let calculo = (3+5) *5
console.log(calculo);

//comparison operators- i will compare values and return Boolean as answer of the comparison.

let one = 1
let two = 2

// == igual a 

console.log(two == 1);
console.log(one == 1);  

//!= different than 

console.log(two !=2);
console.log(one !=2);

/*if you want to compare teh values and the tipe, you have to use "===", it will be called "estritamente igual a". The same thing for different "!=="*/

let jade = 3 

console.log( jade === "3"); // string 
console.log(jade === 3); //number
