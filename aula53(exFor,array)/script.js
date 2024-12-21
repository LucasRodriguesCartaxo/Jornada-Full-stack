const elementos = [
    { tag: 'p', texto: 'qualquer texto' }, //0
    { tag: 'div', texto: 'frase 2' }, //1 
    { tag: 'footer', texto: 'frase 3' }, //2 
    { tag: 'section', texto: 'frase 4' }, //3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) { 
   let { tag, texto} = elementos[i];
   let tagCriada = document.createElement(tag);
   let textoCriado = document.createTextNode(texto);
   tagCriada.innerHTML = texto;
   div.appendChild(tagCriada);
}

container.appendChild(div);
