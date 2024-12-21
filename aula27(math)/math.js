let num1 = 9.54578;
let num2 = Math.floor(num1); 
//estou arredondando para baixo -> 9;
console.log(num2);

let num3 = Math.ceil(num1);
console.log(num3);
// aredondei para cima -> 10;

let num10 = 9.84532;
let MaisProximo = Math.round(num10);
console.log(MaisProximo);
//arredondei para o mais proximo;
//ceil (pra cima);
//flor (pra baixo);
//round (mais proximo);

console.log(Math.max(1,2,7,7,2,999,11,8));
// Max ira pegar o maior numero da sequecia; ->999

console.log(Math.min(7,5,2,9,1));
// Min ira pegar o menor numero da sequencia;

console.log(Math.random());
// vai gerar um numero aleatorio entre 0 e 1; 'o numero 1 numca será incluido'

const aleatorio = Math.random();
console.log(Math.random().toFixed(2))
// peguei um numero aleatorio reservei na var
// e mostrei apenas duas casa decimais depois da virgula;

let aleatorio2 = Math.random() * (10-5) + 5; // estou querendo pegar um numero 
                                            //aleatorio entre 10 e 5;
                                            console.log(aleatorio2);

let Entre20e40 = Math.random() * (40-20) + 20;
                      //formula: (max-min) + min;
console.log(Entre20e40);   

let aleatorioArredondado = Math.round(Math.random() * (100 - 50) + 50);
console.log(aleatorioArredondado)