// está frase tem que aparecer = luiz Otávio Miranda tem 30 anos,
// pesa 84kg tem 1.8 de altura e seu IMC é de 25.9259
// çuiz otavio nasceu em... 


const nome = "luiz Otávio Miranda";
let idade = 30;
let peso = 84;
let alturaEmMetros = 1.80;
let imc = peso / (alturaEmMetros * alturaEmMetros);
let anoDeNascimento = 2024 - 30;

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg tem ${alturaEmMetros} e seu IMC é de ${imc} e seu ano de nascimento é ${anoDeNascimento}`);