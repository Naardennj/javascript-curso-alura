console.log(`\n Trabalhando com Loops`);

const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassgemComprada = false;
const destino = "Salvador";

console.log("\n Destinos Possiveis:");
console.log(listaDeDestino);

const podeComrpar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

//"while" e um laço de repetição que so necessita passar o "if" pois caso seja "else" ja pulara para o proximo codigo
while(contador < 3){
    if (listaDeDestino[contador] == destino){
        destinoExiste = true;
        break;
    }   
    contador += 1;
};

console.log("Destino Existe:", destinoExiste);

if (podeComrpar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro");
}

//"for" e um lanço onde todas as variaveis ja deve ser passada para o codigo, onde ele ja faz a verificação sem nenhuma constante ja declarada
for(let cont = 0; cont < 3 ; cont ++){
    if (listaDeDestino[contador] == destino){
        destinoExiste = true;
    }   
};
