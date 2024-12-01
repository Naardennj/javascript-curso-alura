console.log(`Trabalhando com Listas`);

//Um tipo de lista que nao e recomentado

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos Possiveis:");
// console.log(salvador, saoPaulo, reiDeJaneiro);

//Maneira utilizando Array
const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestino.push(`Curitiba`); //adicionando um item na lista

console.log("Destinos Possiveis:");
console.log(listaDeDestino);

listaDeDestino.splice(1, 1); //para remover um item na lista
console.log(listaDeDestino);

console.log(listaDeDestino[1]); // para exibir somento um elemento