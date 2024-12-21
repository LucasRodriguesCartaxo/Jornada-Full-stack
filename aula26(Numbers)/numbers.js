let num1 = 100; //Number
let num2 =2.5; // Number

console.log(num1.toString() + num2); // transformando um numero em uma string
console.log(typeof num1)

// posso querer a representação binaria
console.log(num1.toString(2));

let numeroQuebrado =15.7238234923487;
console.log(numeroQuebrado.toFixed(2)); //arrendodei o numero ->15.72

// -> verificar se um numero é inteiro
console.log(Number.isInteger(num1)); // -> deu true
console.log(Number.isInteger(numeroQuebrado)); // -> deu false

let num3 = num1 * "oi";
// vou perguntar no consele se o numero é NaN
console.log(Number.isNaN(num1)); // -> vai dar false
console.log(Number.isNaN(num3)); // -> deu true, pois deu invalido na conta

let num5 = 0.7;
let num6 = 0.1;

num5 +=num6; // 0.8 -> num5 = num5 + num6;
num5 +=num6; // 0.9
num5 +=num6; // 1.0
num5 +=num6; // 1.1
num5 +=num6; // 1.2
num5 +=num6; // 1.3
num5 +=num6; // 1.4
num5 +=num6; // 1.5
num5 +=num6; // 1.6
num5 +=num6; // 1.7
num5 +=num6; // 1.8
num5 +=num6; // 1.9
num5 +=num6; // 2.0

console.log(num5) // -> deu 0.9999999999
// para resolver o problesma eu utilizo
num5 = parseFloat(num5.toFixed(2));
console.log(num5) // -> agr teremos o numero 1 no console
