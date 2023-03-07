// IF... Else -it needs a conditional

let temperatura = 38.0

if(temperatura>= 37.5){
    console.log('febre alta');
} else if(temperatura<37.5 && temperatura >= 37.0 ){
    console.log('febre moderada');
} else{
    console.log('saudavel');
}
//you can put the conditional in 'let'

let altura = 1.60
let baixo = altura <= 1.50
let alto = altura >= 1.60 && altura <=1.80

if(baixo){
    console.log("baixo");
}else if(alto){
    console.log("alto");
}else{
    console.log("super alto");
}


let maira = 'gostar de mulher'
let dyke = maira == 'gostar de mulher'
let bi = maira == 'gostar de mulher e homem'

if(dyke){
    console.log('sapatao')
}else if (bi){
    console.log('bissexual');
}else{
    console.log('ht')
}

//switch- default- when is not established as a case.

function calculate(number1, operator, number2){
    let result

        switch(operator){
            case '+':
                result= number1 + number2
                break
            case'-':
                	result= number1 - number2
            	break
            case'*':
                result= number1 * number2
                break
            case'/':
                result= number1 / number2
                break
            default:
                console.log('operaçao nao implementada')
                break
            
        }
        return result

}

console.log(calculate(4, "+", 64))


