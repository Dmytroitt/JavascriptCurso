// IEEE 754-2008
// num1 = num1 + num2;
//
let num1 = 0.7;// number
let num2 = 0.1;//number
/*
num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8 
num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; //1.0
*/
num1 = Number(num1.toFixed(2));
//
console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2);
//num1 = num1.toString()
//console.log(typeof num1);
//comando toFixed(quantidade do arredondamento) arredonda numeros, Exemplo : 10,897983479123 para 10,89 
//console.log(num1.toFixed(2));
//comando isinteger serve para saber se o numero é inteiro
//console.log(Number.isInteger(num1))
//let temp = num1 * '5'
//console.log(temp)

