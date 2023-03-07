//Repetation structure'
//for 3 coisas- inicializacao, condicao de continuacao do looping enquanto for verdadeiro, expressao que ira acontecer quando terminar o lopping.

for(let i= 0; i<= 10; i++){ //enquanto for verdadeiro irá rodar e acrescentar 1.
    console.log(i);
}

for(let i= 0; i<=30; i++){
    if(i===21){
        continue; //ira ignorar o 21, tambem poderia pedir para para quando chegasse no 21- break
    }
    console.log(i);
}

//while- while it's true. It is better to use when you don't know when the conditional will end. 

let i = 12;
while(i<=20){
    console.log(i)
    i++;
}


//for...of- lopping in string and array

let name = 'Jade'

for(let char of name){
    console.log(char)
}

let names= ['jade', 'maira', 'amanda']

for(let name of names){
    console.log(name)
}

//for...in - lopping in obejct

let person= {
    name: 'jade',
    age: 24,
    weight: 53,
}

for(let property in person){
    console.log(property);
    console.log(person[property]);
}