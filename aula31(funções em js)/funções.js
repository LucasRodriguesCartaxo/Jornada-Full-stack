function saudacao(nome) {
    console.log(`bom dia ${nome}`);
}
saudacao('lucas');
//-----------------------------------------------------------------------------------------------------------------------

function time(time) {
    console.log(`o melhor time do brasil é o ${time}`)
}
time('SaoPaulo');
//-----------------------------------------------------------------------------------------------------------------------

function cs(skthedram) {
    console.log(`as lendas se chamam ${skthedram}`)
}
cs("fallen,coldzera,taco,fer,fnx");
//-----------------------------------------------------------------------------------------------------------------------

function sobreNome(sobreNome) { //funcar recebe um nome
    return `seu sobrenome é ${sobreNome}` //passando oque sera retornado
}
const variavel = sobreNome("rodrigues"); // declarando o conteudo que vai ter dentro da funcao
console.log(variavel) //exibindo a variavel que foi criada -> no console vai aparecer-> seu sobrenome é rodrigues
//-----------------------------------------------------------------------------------------------------------------------

// vamos criar uma funcção que faz a soma de dois valores;
function soma(a, b) {  // declarando que a função ira receber dois parametros;
    return a + b    // dentro do corpo da funcao estou dizendo que ira retornar a soma desses dois valores
}
const numeros = soma(1, 3); // estou chamando a função soma, e estou passando que o valor do parametro a= 1 & b=3
console.log(numeros) // O valor retornado pela função (4) é armazenado na constante numeros
//-----------------------------------------------------------------------------------------------------------------------

// criando uma funcao que ira fazer a multiplicacão dos valores;
function multiplicacao(x, y) {
    return x * y
}
const multi = multiplicacao(10, 20);
console.log(multi)  // o valor 200 foi exibido no OUTPUT(console)
//-----------------------------------------------------------------------------------------------------------------------
//Criando uma funcção anonima, vou criar uma função que faz a raiz quadrado de um numero;
const raizQuadrada = function (n) {
    return n ** 0.5;
}; // nesse modelo é obrigatorio terminar a função com ponto e virgula
console.log(raizQuadrada(9));
console.log(raizQuadrada(16));
console.log(raizQuadrada(25));
//-----------------------------------------------------------------------------------------------------------------------
function subtracao(a, b) {
    return a - b
}
const conta = subtracao(50, 30);
console.log(conta)

