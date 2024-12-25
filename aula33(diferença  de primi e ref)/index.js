/* 
Primitivos (imutáveis) - string, number , boolean, undefined, 
null (bigint,simbol) - Valor
*/
//          01234 
let nome = 'Lucas';
nome[0] = 'R' // essa linha nao faz absolutamente nada pois a string é imutável, pr isso continua exibindo a letra L no console
console.log(nome[0], nome); // output --> L Lucas

let a = 'A';
let b = a; // Copiando o valor de a para minha variavel b
console.log(a, b);

a = "outra coisa" // eu alterei o valor de A porem nao teve impactado no valor de B pois eu ja tinha feito uma 'COPIA';
console.log(a, b);
//----------------------------------------------------------------------------------------------------------------------------------------------
/* 
Referência (mutável) - Arrays, Objetos, Funções
*/
let fisrtNumbers = [1, 2, 3];
let secondNumbers = fisrtNumbers;        // neste caso eu não estou copiando o vlaor pois este tipo de dado array não é um tipo de dado primitivo
console.log(fisrtNumbers, secondNumbers);//  ou seja é passado por referencia;  

fisrtNumbers.push(4);
console.log(fisrtNumbers, secondNumbers);

secondNumbers.pop();
console.log(fisrtNumbers, fisrtNumbers); // como fisrtNumbers e fisrtNumbers apontam para o mesmo local de memoria entao os dois são efetados

const pessoaA = {
    nome: 'luiz',
    sobrenome: 'otavio'
};
const pessoaB = pessoaA;


console.log(pessoaB); // pessoaB tem o mesmo valor de pessoaA ---> { nome: 'luiz', sobrenome: 'otavio' } aponta pro mesmo local da memoria
// Caso eu queria copiar de fato ao inves de referenciar é so eu fazer uma copia por exemplo:

const exemplo = {
    nome: 'lucas',
    sobrenome: 'rodrigues'
};

const copia = { ...exemplo }; // operador chamado spread para copiar, ao lado dos tres pontos passo o nome da variavel que eu quero copiar, 
// e guardei ela na variavel copia;

console.log(copia); // no output vai exibir --> { nome: 'lucas', sobrenome: 'rodrigues' };


