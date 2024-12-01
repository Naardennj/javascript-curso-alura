console.log(`Trabalhando com Condicionais`);

const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassgemComprada = true;

console.log("Destinos Possiveis:");
console.log(listaDeDestino);

//Utilização de "if" e "else" para verificar se e possivel ou nao executar o codigo

// if (idadeComprador >= 18) {
//     console.log("Comprador Maior de Idade");
//     listaDeDestino.splice(1, 1);
// } else if (estaAcompanhada == true) {
//     console.log("Comprador esta acompanhado");
//     listaDeDestino.splice(1, 1);
// } else {
//     console.log("Comprador não e maior de idade");
// };

//Operador de "OU" e ||
if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem");
    listaDeDestino.splice(1, 1);
} else {
    console.log("Comprador não e maior de idade");
};

//Operaador de "E" e &&
console.log("Embarque: \n\n" );
if(idadeComprador > 18 && temPassgemComprada){
    console.log("Boa viagem");
}else {
    console.log("Você nao pode embarcar")
};

console.log(listaDeDestino);

//Operadores Logicos

// console.log(idadeComprador > 18); Maior
// console.log(idadeComprador < 18); Menor
// console.log(idadeComprador >= 18); Maior ou Igual
// console.log(idadeComprador <= 18); Menor ou Igual
// console.log(idadeComprador == 18); Igual