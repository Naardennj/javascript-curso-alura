console.log("Conversao de Tipos");

//Quando colocamos qual quer texto com uma operação matematica entrre elees, o programa interpreta que deve juntar eles, no caso do 1 exeplo ficara "ano2020" e do segundo "22"
console.log("ano" + 2020);
console.log("2" + "2");

//parseInt serve para forçar um texto em numero para ocorrer a operação matematica
console.log(parseInt("2") + parseInt("2"));

//No caso "parseInt" e mais utilizado para SOMAS, pois o JS ja tenta fazer a conversão de texto para numero em outras operações matematica
console.log("10" / "2");

//Caso um dos texto não for um numero o programa da um erro NaN (Not a Number)
console.log("Gabriel" / "2");

//JS ele utiliza de "." para separar numeros com casas decimais, utilizando a "," deixara um espaço entre os numeros.
console.log(6.5);
console.log(6,5);