//               01234567
let umaString = "Um texto";

//  console.log(umaString[4]) // vai retornar o valor 4

console.log(umaString.indexOf("texto")); // ele vai retornar em qual indice a palavra "texto" se inicia que no caso é no indice 3

console.log(umaString.lastIndexOf('m', 3)); // aqui ele vai começar a busca pelo ultiomo valor

let frase = "o rato roeu a roupa do rei de roma.";

console.log(frase.replace(/r/g, "#")); 
// estou substituindo o texto, aonde tem a letra r aparecera o #, coloquei a flag G para pegar todos os R, caso o contrario ele so iria substituir o primeiro R.
let time = "SP" 
console.log(time.length); //para descobrir o tamanho (lembre oque o primeiro valor é 0..1,2,3,4...)

let fatiada = "eu amo o sao paulo" 
console.log(fatiada.slice(8,18));
// fatiei o valor ou seja peguei o intervalo de 8 e 18 que corresponde o nome do time
// que é sao paulo
// lembrar de colocar um valor a mais, por exemplo deveria ser 8,17 porem tenho que acrecentar +1
// por isso que ficou 8 + 18, por conta da fatiada

let finalDaFrase = "eu gosto de jogar CS";
console.log(finalDaFrase.substring(finalDaFrase.length -8));
console.log(finalDaFrase.slice(-8));
// as duas irao me retorar a frase 'jogar CS' porém "SLICE" é mais facil

let queroLetraMaior = "lucas";
console.log(queroLetraMaior.toUpperCase(0));
// vai vim a frase toda em maiscula

let queroLetraMenor = "LUCAS";
console.log(queroLetraMenor.toLocaleLowerCase());
// vai colocar a frase todo em minuscula

let quaseTudoMin = "LUCAS";
let resultado = quaseTudoMin.charAt(0).toUpperCase() + quaseTudoMin.slice(1).toLowerCase();
console.log(resultado);
// Acima, usamos charAt(0) para pegar a primeira letra da string
// toUpperCase() transforma essa primeira letra em maiúscula, por precaução
// slice(1) retorna o restante da string a partir do segundo caractere
// toLowerCase() transforma essas letras em minúsculas

//EXERCICIO.
// const nomeCompleto = prompt("digite seu nome completo"); // OBS: o valor que o usuario digitar será armazenado na const nome
// document.body.innerHTML = `O seu nome é: ${nomeCompleto} <br>`;
// document.body.innerHTML += `O seu nome tem:${nomeQtdLetras} letras <br>`;
// document.body.innerHTML += `A segunda letra do seu nome é: _____ letras <br>`;
// document.body.innerHTML += `Qual o primeiro indice do seu nome é : _____ <br>`;
// document.body.innerHTML += `Qual o ultimo indice do seu nome é : _____ <br>`;
// document.body.innerHTML += `As ultimas 3 letras do seu nome são : _____ <br>`;
// document.body.innerHTML += `As pavalras do seu nome são : _____ <br>`;
// document.body.innerHTML += `Seu nome com letras maisculas : _____ <br>`;
// document.body.innerHTML += `Seu nome com letras minusculas : _____ <br>`;

// let nomeQtdLetras = nomeCompleto.length()

