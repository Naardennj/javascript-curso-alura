console.log("Atribuicao de Variaveis");

//Const e uma tipo de variavel que nao pode ser mudada, Let ela e uma variavel mutavel
const nome = "Gabriel";
const sobrenome = "Angelis";

//para separar 2 variaveis pode usar "," ou "+ " " +"
console.log=(nome, sobrenome);

//essa maneria e a melhor 
console.log=(`Meu nome e ${nome} ${sobrenome}`);

//Nesse caso daria um erro pois nome e uma variavel "const", nesse caso para ser mutavel teria que ser "let" porem nao e uma boa pratica nao alterar o conteudo de uma variavel
//nome = nome + sobrenome;

let contador = 0;
contador = contador + 1;

const nomeCompleto = (nome + sobrenome);
console.log(nomeCompleto);

let idade; //declarando a variavel
idade = 22; //atribuindo valor

idade = idade + 1;
console.log(idade);
