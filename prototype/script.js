/*
Prototype 
* prototype-based language
* prototype chain 
* __proto__
*/

//quando criar um objeto {} ira possuir uma propriedade que ira referenciar um outro objeto(criado antes, o prototipo), herdadno todas as propriedades desse prototipo. 

let first = 'jade'
console.log(first.__proto__)

const second = "julia"
console.log(second.length)

/* 
    Type conversion(typecasting) vs Type coersion

    *Change from one datatype to another
*/
console.log('9'+ 5) //coersion
console.log(Number('9') + 5) //conversion

//Manupulating String into Numbers

let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))

let numbers = 1234
console.log(String(numbers).length)

let p = 345.23456
console.log(p.toFixed(2).replace(".", ","))

//Manipulating Strings and Array

let phrase = "I want to love like in the movies"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

let slogan = "I don't want to live"
console.log(slogan.includes("live"))

let Arry = new Array('a', 'b', 'c')
console.log(Arry)

let word = "Manipulation"
console.log(Array.from(word))


//Manipulating Arrays 

//adding a iteM on the end

let tech = ["html", "css"]
tech.push("js")

//adding on the beginning
tech.unshift("nodejs")
console.log(tech)

//remove from the end
let techs =["html", "css", "java"]
techs.pop()

//remove from the beginning
//techs.shift()
console.log(techs)

//pic up some elemnets from the array 
console.log(tech.slice(2,3)) /*the frist number is the one that you want to pic, and the second number is the amount   that has on the array*/

//remove one or more items from the array
techs.splice(2,3) //first- position, second amount 
console.log(techs);

//find the position of the element on the arrays 
let index = techs.indexOf('css')
console.log(index);




