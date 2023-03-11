function protecao() { //nao podera ser acessada no escopo global. //previnir que o formulario seja enviado toda vez que clicar  no botao
    const form = document.querySelector('.form'); //query-seleciona elementos como iria selecionar classe(document.getElementbyId)  
    const resultado= document.querySelector('.resultado')

    const pessoas = [];

    /*form.onsubmit = function (evento) {  Uma forma de fazer a prevençao do envio imediato 
        evento.preventDefault();
        alert('enviado');
        console.log('adicionado.');
    };
};*/

    function recebeEventForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const altura = form.querySelector('.altura');

        pessoas.push({    //enviar objetos para o array
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            altura: altura.value
        });
      
        console.log(pessoas);
        
        resultado.innerHTML += `<p> Cadrasto realizado: ${nome.value} ${sobrenome.value} ${idade.value} ${altura.value}</p>`
    }
    form.addEventListener('submit',recebeEventForm );
}  

protecao(); //chama a funcao