//imagine criar um monte de variaveis dessa maneira,seria muito cansativo,
//por isso utilizamos objetos para 'agrupar' esses valores;
const nome01 = 'lucas';
const sobreNome01 = 'rodrigues';
const idade01 = 21;

const nome02 = 'padoru';
const sobreNome02 = 'tomaz';
const idade02 = 22;
//---------------------------------------------------------------------------------------------------------------------------------------------------------
// vamos agora criar um obj para pegar essas mesmo infos;
const pessoa1 = {              //utilizo a chave '{};' para criar um objeto 
    nome: 'lucas',             // criei um atributo chamado 'nome' e ao lado passa o valor desse atributo como por exemplo 'lucas';
    sobrenome: 'rodrigues',    // separe os atrubutos com a virgula ','
    idade: 21
};

const pessoa2 = {            //utilizo a chave '{};' para criar um objeto 
    nome: 'padoru',         // criei um atributo chamado 'nome' e ao lado passa o valor desse atributo como por exemplo 'padoru';
    sobrenome: 'tomaz',    // separe os atrubutos com a virgula ','
    idade: 22
};
// Para eu acessar esse atributo eu vou utilizar a notação de PONTO------>'.'
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
//-------------------------------------------------------------------------------------------------------------------------------------------------------
// Agora vou criar uma função que vai criar tudo isso acima para mim
function criaPessoa(nome, sobrenome, idade) { // descrevendo que minha função vai receber tres parametros;
    return {                              // estou dizendo que dentro da minha função vai retornar um objeto
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const people1 = criaPessoa('lucas', 'rodrigues', 21); // enviando os argumentos para os parametros. OBS: Argumento é o valor que é passado para o parametro;
const people2 = criaPessoa('pedro', 'morais', 21); // enviando os argumentos para os parametros. OBS: Argumento é o valor que é passado para o parametro;
const people3 = criaPessoa('padoru', 'tomaz', 22); // enviando os argumentos para os parametros. OBS: Argumento é o valor que é passado para o parametro;
const people4 = criaPessoa('suveco', 'nascimento', 23); // enviando os argumentos para os parametros. OBS: Argumento é o valor que é passado para o parametro;
const people5 = criaPessoa('fallen', 'toledo', 34); // enviando os argumentos para os parametros. OBS: Argumento é o valor que é passado para o parametro;

console.log(people1);          // output vai exibir ->>> { nome: 'lucas', sobrenome: 'rodrigues', idade: 21 };
console.log(people1.nome);     // output vai exibir somente ->>> lucas;
console.log(people5.nome);     // output vai exibir somente ->>> fallen;
console.log(people3.sobrenome);// output vai exibir somente ->>> tomaz; 
console.log(people1.nome, people2.nome, people3.nome, people4.nome, people5.nome);//output vai exibir ->>>lucas pedro padoru suveco fallen;
//---------------------------------------------------------------------------------------------------------------------------------------------------------
const person1 = {
    nome: 'lucas',
    sobrenome: 'rodrigues',
    idade: 21,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi`);
    }
};

person1.fala();