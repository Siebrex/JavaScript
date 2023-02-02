//1. Declarar uma variável de nome weight
let weight

//2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/*
    3.Declare uma variável e atribua valores para cada um dos dados:
    * name: String 
    * age: Number (integer)inteiro
    * starts; Number (float) real 
    * isSubscribed: Boolean
*/
    let name = "jade"
    let age = 23
    let star = 4.5
    let isSubscribed = true 

    /*
        4. A variável studente abaixo é de que tipo de dado? 
        
        let student = {}; 

        4.1 Atribua a elas as mesma propriedades e valores

        4.2 Mostre no consele a seguinte mensagem:

            <name> de idade <age> pesa <wight> kg.

            obs: sustitua name, age e weight pelos valores de cada propriedade do objeto 
    */

        let student = {
            name: "julia",
            age: 16,
            weight: 50.0,
            isSubscribed: false,
        }; // object//

        console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`) 

    /*  5. Declara uma variável de tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente Array vazio
    */

    //let students = []

        /* 6. Reatribua valores para a variavel a cima, colocando dentro dela o objeto student da questao 4.
        */
    let students = [
        student
    ]

    console.log (students)

        /* 7. Coloque no console o valor da posiçao zero do Array acima 
        */
    console.log(students[0])

        /* 8. Crie um novo estudante e colocque na posição 1 do Array students
        */

        const Jade = {
            name: "Jade",
            age: 24,
            weight: 52.3,
            isSubscribed: true,
        }

        students[1] = jade
        console.log(students)

        /* 9. Sem rodar o código repsonda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se voce acertou

        console.log(a)
        var a = 1 
        */

        console.log(a) 
        var a = 1
        // será undefined, a var foi denifina depois, hosting. 




