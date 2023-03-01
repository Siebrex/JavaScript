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

//maior que // menor que"<" // maior igual "=>" // menor igual "<="
console.log( one > two);

//Assignment (operadores de atribuiçao)

let x //if you not assign a valeu it will be undefined 
x = 2
console.log(x);

//addiction assignment. It works if any mathematical operator: "-="; "/="; "*="
x += 2 // it will be x = x+2
console.log(x);

//remainder (rest of the division)
x %= 5
console.log(x);

// exponentiation
 x **= 2
 console.log(x);

//Logical operators - when 2 boolean valeus, when verified, results on true or false

let pao = true 
let queijo = true

// AND && - two valeus needs to be true or it will always be false

console.log( pao && queijo);

//OR || - one can be false and it stil it results  be true 
let chocolate = false
let banana = true  
console.log( chocolate || banana);

// NOT ! - it will change the valeu, if was true will be false and vice versa.

console.log( !chocolate);

// The conditional ( TERNARY/ TERNARIO)- it dependes of the condition, we will receive diferents valeus.
// condiçao entao valor 1 se nao valor 2
// condition  ?   value1    :    valeu2

let nayara = true
let natercia = true

const irmas = nayara && natercia ? 'gemeas' : 'nao gemeas' //you can put any logical operators
console.log(irmas);

//maior de 18
let age1= 17
const drive = age1 >= 18 ? 'can drive' : "can't drive"
console.log(drive);


//String Operator:
//Comparison (==)
console.log('a' == 'b')

//Concatenation(concatenaçao)- 2 strings
console.log('m' + 'aira');

let alpha = 'alpaha'
console.log(alpha += 'bet');

/*Falsy- when boolean is mandatory, the value will be considered false.

false:
0  -0  ""  null  undefined NaN */

console.log(null ? 'verdadeiro' : 'false');

/*Truthy- the valeu is considered true in a context that we use boolean.

true {} [] 1 3.23 "0" "false" -1 Infinity -Infinity*/

console.log(3.23 ? 'verdadeiro' : 'falso');


/* Operator precedence (precedencia de operadores)

*grouping ()
*negaçao e incremento ! ++ --
* multiplicaçao e divisao * /
*adiçao e subtraçao + -
*relacional < <= > >=
*igualdade == != === !==
*AND  &&
*OR  ||
*condicional ?:
*assignment  = += -= *= /= 
*/






