// function scope
let subject = 'create video'

function createThink(subject){
    subject = 'study'
    return subject
}
//just going to exist in this scope a new subject if it be defined inside the function.
console.log(createThink(subject))
console.log(subject)

//function hoisting. This function is backwards, but javascript organaze in the right form.

sayMyName();

function sayMyName(){
    console.log('Jade')
}

//arrow function. It's a way to write a funcioan shorter. 

const Myname = () => {
    console.log('Julia')
}

Myname()

//callback function 
// it's a function which passes as a parameter for another function

function Mydog (name) {
    console.log('before executing the callback')
    name()

    console.log('after executing the callback')
}

Mydog(
    () => {
        console.log('making a call back')
    }
)

/*
    Function() constructor 
    * expression new 
    * create a new object 
    * this as a keyword
*/

function Person(name){
    this.name= name 
    this.walk= function(){
        return this.name + " is walking"
    }
}
// this will make a reference for mariana

const mariana = new Person("mariana")
console.log(mariana.walk())
