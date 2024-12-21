// cada um desses indecis representa um elemento, 
//e todos os elementos representa o array completo
//                0        1       2
const alunos = ['luiz', 'Maria', 'João'];
// console.log(alunos[0]); // estou buscando o indice 0 dentro do meu array que seria o Luiz;
// console.log(alunos[2]); // estou buscando o indice 2 dentro meu array que seria o João;
// console.log(alunos); // estou querendo exibir todo o conteudo dentro do meu array;

// posso editar o valor de um indice. 
// por exemplo no indice 0 irei trocar de luiz para lucas
alunos[0] = 'lucas';
alunos[3] = 'padoru';
// agora meu array ficou desta maneira abaixo
//                    0        1       2       3
// const alunos = ['lucas', 'Maria', 'João','padoru'];
console.log(alunos[3])
console.log(alunos.length) // UTILIZO o LENGTH pra saber o tamanho do Array;

const frutas = ['banana', 'pera'];
frutas[frutas.length] = 'maça';  // utilizei o legth para colocar no final do array, 
//                                  assim nao preciso saber o tamanho ja que o comando vai colocar no ultimo indice
console.log(frutas);
console.log(frutas[2])

const carros = ['bmw', 'lamborguini', 'ferrari', 'porsche'];
carros[carros.length] = 'mclaren';
console.log(carros);
console.log(carros.length);
console.log(carros[1]);

//             TEM um jeito mais facil de colocar o 'valor' no ultimo indice que é utilizando o PUSH

const mouse = ['razer', 'logitech', 'pulsifire'];
mouse.push('hyperx'); // aqui estou estou dizendo 'efia esse "valor" no final do meu array';
mouse.push('SteelSeries'); // aqui estou estou dizendo 'efia esse "valor" no final do meu array';
mouse.push('vaxxe'); // aqui estou estou dizendo 'efia esse "valor" no final do meu array';
mouse.push('zowie'); // aqui estou estou dizendo 'efia esse "valor" no final do meu array';                                     0      1       2
mouse.unshift('pulsar') // adicionando um 'valor' no inicio do array oque ira mover os arrays, ou seja ira mudar os indeces; (pulsar,razer,logitech...);
console.log(mouse); // verificando se tudo foi insirido corretamente;
console.log(mouse.length) // vai me falar o tamanho do array 



