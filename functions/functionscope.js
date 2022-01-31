// function scope
let subject = 'create video'

function createThink(subject){
    subject = 'study'
    return subject
}
//just going to exist in this scope a new subject if it be defined inside the function.
console.log(createThink(subject))
console.log(subject)

//function hoisting

sayMyName();

function sayMyName(){
    console.log('Jade')
}

//arrow function 

const Myname = () => {
    console.log('Julia')
}

Myname()

//callback function 
// it's a function which passes as a parameter for another function

function Mydog (name) {
    console.log('before executing the callback')
    name()
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
// this will make a reference for carolina

const carolina = new Person("carolina")
console.log(carolina.walk())
