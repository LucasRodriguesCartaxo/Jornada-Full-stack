// push('padoru') vai colocar no final do array;
// unshift('tomaz') vai colocar no primeiro indice no meu array;
// pop() estou removendo o elemento do final do meu array;
const nome =[];
nome.push('padoru');
nome.unshift('tomaz');
//     0        1
// ['tomaz','padoru']
console.log(nome);
nome.pop(); // removi o ultimo elemento;
// ['tomaz']
console.log(nome);
// ---------------------------------------------------------------------------

// agora irei salvar o 'item' removido 
//               dentro de uma variavel;
const time = ['sao paulo','santos','flamengo','botafogo'];
var removido = time.pop(); // remove o ultimo 'elemento';
console.log(removido) // aqui ele armazenou o 'botafogo';
console.log(time)
// --------------------------------------------------------------------------------

// agora irei remover o primeiro elemto do meu array;
var selecao = ['brasil','argentina','espanha'];
console.log(selecao);
var guarda = selecao.shift(); // aqui estou removendo o 'brasil', e tb armazei o 'valor' na variavel;
console.log(selecao) // ['argentina','espanha'];
console.log(guarda); // 'brasil'
//---------------------------------------------------------------------------------


// eu posso apagar algo dentro do meu array
//             0         1       2         3         4
var furia =['fallen','skullz','chelo','kscerato','yurihh'];
delete furia[1]; // irei apagar o skullz,porem vou ficar com o locar vazio,
//                  ja que os indeces nao foram alterados;
console.log(furia);
// [ 'fallen', <1 empty item>, 'chelo', 'kscerato', 'yurihh' ] OBS:esta foi a msg no console;

furia[1] = 'fnx'; // coloquei o fnx no indice 1 agora;
console.log(furia);
//               0         1       2         3         4
//          [ 'fallen', 'fnx', 'chelo', 'kscerato', 'yurihh' ];
furia.push('vini');
furia.push('art');
furia.push('ablej');
console.log(furia);
//      0        1       2         3          4       5      6      7
// [ 'fallen', 'fnx', 'chelo', 'kscerato', 'yurihh','vini','art','ablej' ];
console.log(furia[3]); // kscerato


// agora irei ´fatiar o array´;
// suponha que eu quero pegar do elemento 0 até o 2;
//                       SLICE
console.log(furia.slice(0,3)); // como o ultimo elemento nao é incluido entao eu coloquei 3;
// [ 'fallen', 'fnx', 'chelo' ]