// Valor por referência
//              0        1       2 
const nomes = ['lucas', 'tomaz', 'suveco'];
nomes[2] = 'peixe'; // alterando o indice 2 
console.log(nomes);
// Deletando um indice do meu array;
delete nomes[1];
console.log(nomes)
// [ 'lucas', <1 empty item>, 'peixe' ];
// vou colocar um nome no indice 1 para nao ficar um 'buraco' no array;
nomes[1] = 'padoru';
console.log(nomes);
//[ 'lucas', 'padoru', 'peixe' ];

// --------------------
const times = ['vasco', 'fortaleza', 'sao paulo', 'santos'];
const novo = [...times]; // espaçando o meu array, fiz uma 
//                    'copia dos times para dentro de novo';
// se eu apenas usar o sinal do = os dois valores seriam afetados;

novo.pop(); // removendo o ultimo indice da const novo que seria o 'santos';
console.log(times);
// [ 'vasco', 'fortaleza', 'sao paulo', 'santos' ];
console.log(novo)
//      0          1            2
// [ 'vasco', 'fortaleza', 'sao paulo' ];
console.log(novo.length);
// 3

// -------------------------------
const cs = ['sk', 'vp', 'navi', 'g2'];
var removido = cs.pop();// estou armazenando os itens removido, 
//                       que no caso seria a g2;
console.log(removido);
// g2;
console.log(cs);
// [ 'sk', 'vp', 'navi' ];

removido += cs.pop() // removi mais um indice no final ou seja removi a 'navi';
console.log(cs)
// [ 'sk', 'vp' ];
console.log(removido);
// g2navi // aqui esta os itend removidos que eu guardei na minha variavel;

// agora irei exibir no console o array e os elementos removidos;
console.log(cs, removido);
//[ 'sk', 'vp' ] g2navi 
//(g2 e navi fomam os removidos, 
// percebesse que o console até me informa que eles estão fora do meu array);



const comida = ['macarrao', 'pizza', 'sopa'];
var retirado = comida.shift();
// vou remover o primeiro indice que seria o macarrao;
console.log(comida, retirado);
comida.push('carne');
// adicionando no final do meu array;
console.log(comida);
console.log(comida.length - 1);
// cololcando o -1 eu sei de fato o tamanho do meu array;

comida.unshift('lanche');
// adicionei esse elemento no indice 0;
console.log(comida)      //     0        1        2       3   
// agr meu array ficou -> [ 'lanche', 'pizza', 'sopa', 'carne' ];

// SHIFT   remove do começo;
// UNSHIFT adiciona no começo; 
// POP remove do final;
// PUSH adiciona no final;
// SLICE fatia meu array;

//             0          1       2        3
const sptech = ['romolo', 'lucas', 'rafael', 'pedro'];
var fatiada = sptech.slice(1, 3); // vou começar do indice 1 e vou terminar no 3;
// o 3 nao vai ser incluiudo por isso o pedro nao ira aparecer;

console.log(fatiada);// -> [ 'lucas', 'rafael' ];
console.log(sptech);// -> [ 'romolo', 'lucas', 'rafael', 'pedro' ];

// ---------- POSSO usar negativo TAMBEM;
var negativo = sptech.slice(0, -1); // agora ira aprecer todos menos o pedro;
console.log(negativo); // -> [ 'romolo', 'lucas', 'rafael' ];

// vou exibir apenas o lucas agora;
var meuNome = sptech.slice(1, -2);
console.log(meuNome); // -> [ 'lucas' ];

// ------- Convertando uma string num array;

const nome = 'Lucas Rodrigues Cartaxo';
const nomes = nome.split(' '); // estpu utilizando o espaço para separar a string no array;
console.log(nomes); // -> [ 'Lucas', 'Rodrigues', 'Cartaxo' ];


// se eu tiver valores separados por virgula 
// eu posso utilizar desta maneira (',') -> quero separar a virgula;
const mae = 'Maria,Ivanda,Rodrigues,Cartaxo'
const separado = mae.split(',');
console.log(separado);// ->[ 'Maria', 'Ivanda', 'Rodrigues', 'Cartaxo' ];
console.log(separado.length)// 4
console.log(mae.length)// 30 

// ----- Agora irei fazer um array se tornar uma string;

const marca = ['nike', 'puma', 'adidas'];
const marcas = marca.join(' '); //agr irei unir todos os valores dp array;
// utilzei o espaço como separador (' ');

console.log(marcas)//-> nike puma adidas                              