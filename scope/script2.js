//Object

const person = {
    name: 'Jade',
    age: 23,
    weight: 48.5,
    isAdmin: true
}

console.log(person.name)
console.log( `${person.name} tem ${person.age} anos`)

//Array

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Dog',
        age: 3
    }
]

//acess values in the array, by the position of the array
console.log(animals[0])
//total of elements on the array
console.log(animals.length)
// will show the object on the position 2
console.log(animals[2])
// acess one propriety of the object, will show dog.
console.log(animals[2].name)