const numero = Number(prompt("digite um numero"));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById("texto");
/* 
Raiz quadrada 7.43243242
55.213123121 é inteiro:false
É NaN: false
Arredondando para baixo:55
Arredondando para cima:56
com duas casa decimais: 55.20
*/

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p> Raiz quadrada: ${numero ** 0.5}</p>`
texto.innerHTML += `<p> ${numero}é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p> é NaN ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondando para baixo:${Math.floor(numero)} </p>`
texto.innerHTML += `<p>Arredondando para cima:${Math.ceil(numero)} </p>`
texto.innerHTML += `<p>com duas casa decimais:${numero.toFixed(2)} </p>`
