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


