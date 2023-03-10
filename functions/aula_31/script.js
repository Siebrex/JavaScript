function saudacao(nome){  // paramentro dentro dos parenteses. 
   return `hallo ${nome}!`; //funcao que retorna valor 
}

const variavel = saudacao('Jade'); //no momento que chama a funçao irá colocar o que esta detro do parametro(argumento/valor)
console.log(variavel);


function soma(x,y){
    return `total ${x+y}`;
}
const valor = soma(1,2)
console.log(valor);  

function adition(a,b){
    const resultado = `total: ${a+b}`;
    return resultado
}
console.log(adition(10,50));