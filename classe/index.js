//Classes serao usadas no react para criar seus componentes 

class Humano{
    constructor(){
        this.gender = 'feminino';
    }

    printGender(){        
        console.log(this.gender);
     }
}
 


class Pessoa extends Humano{          //classe tambem podera herdar de outra classe, por meio da palavra 'extends'. Tamebm deve chamar o super constructor para funcionar.
    constructor(){ //propriedade- por meio de constructor
        super(); 
        this.name = 'jade';
    }          
    printMyName(){
        console.log(this.name);
    }                    
}

const pessoa = new Pessoa();
pessoa.printMyName();
pessoa.printGender();


//Outro metodo de fazer classe sem escrever o constructor:

class Humanos{
    gender = 'feminino';
    printGender = () => {        //ira usar arrow function
        console.log(this.gender);
     }
}
 
const pessoas = new Humanos();
pessoas.printGender();

