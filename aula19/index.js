/*
Primitivos (imutáveis) = string, Number , boolean , undefined , null(bigint, symbol), valor

referência mutável = array, object, function
*/
const a = {
         nome: 'luiz',
         sobrenome:'otavio'
}
const b = {...a}

a.nome = 'João'
console.log(a);
console.log(b);
