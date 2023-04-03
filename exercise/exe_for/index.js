//por meio do js irá colocar elementos no html

const elementos = [
    {tag: 'p', texto: 'paragrafo imbutido'}, //0
    {tag: 'div', texto: 'div imbutida'}, //1
    {tag: 'section', texto: 'section imbutido'}, //2
    {tag: 'footer', texto: 'footer imbutido'},//3
];

//precisa adicionar elemento-appendchild- ira adicionar no final do elemento selecionado.
//1)ira selecionar o elemento 
const container = document.querySelector('.container');

//2)criar elemento div
const div = document.createElement('div');

//3)percorrer o elemnto por meio de for
for(let i= 0; i < elementos.length; i++){
    let { tag, texto} = elementos[i]; //desestruturacao da tag e texto
    let tagCriada = document.createElement(tag); //4)criar um elemento 
    tagCriada.innerHTML = texto; //5)criou a tag
    div.appendChild(tagCriada) //6)adicionar no html a tag criada 
}

container.appendChild(div);//7)adicionou a div criada dentro do contiainer 
