// console.log('linha 0');
// console.log('linha 1');
// console.log('linha 2');
// console.log('linha 3');
// console.log('linha 4');
// console.log('linha 5');


// primeiro criou a variavel -> 'var i';
// Depois fala a condição: por exemplo o laço de repetição deve parar
// quando for menor ou igual a 5;
//usei ++ pois estou incrementando o valor da variavel;

// estou inicializando o for com 0, porém posso inicar com qualaquer numero
for (let i = 0; i <= 5; i++) {
    console.log(`linha ${i}`);
}

for (let pula20 = 0; pula20 <= 100; pula20 += 20) {
    console.log(pula20);
}

// agora irei comecar do 500 e irei ate o 0(irei pular de 100 em 100)
for (let contador = 500; contador >= 0; contador -= 100) {
    console.log(contador);
}

// qual numero é par ou impar de 0 a 10;
for (let par = 0; par <= 10; par++) {
    if (par % 2 == 0) {
        console.log(par)

    }

}

// qual numero é impar(operador ternario);
for(let i =0; i<=10; i++){
    let impar = i %2 ===1 ? "impar" : "par"
    console.log(impar);
}

// vamos percorrer um array;
// imagina que eu tenho uma lista de frutas;
//               0       1       2      3       4
const frutas =['maça','banana','pera','uva','melancia'];
console.log(frutas[4])
console.log(frutas.length) // aqui ele me falou que eu tenho 5 elementos;

for(let i =0; i < frutas.length; i++){
    console.log(`Índice ${i}`,frutas[i]);
}