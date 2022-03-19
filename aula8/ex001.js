const nome = 'Pedro';
const sobren = 'Henrique';
const idade = 15;
const peso = 60;
const alturaEmM = 1.75;
let imc; // peso dividido por altura x altura   
let anonasc;

imc = peso / (alturaEmM * alturaEmM);
console.log(imc);
anonasc = 2021 - idade;
//template strings
console.log(`${nome} ${sobren} tem ${idade} anos pesa ${peso} Kg.`);
console.log(`tem ${alturaEmM}, de altura e seu IMC é de, ${imc}.`);// melhor forma (template string)
console.log(`${nome} nasceu em ${anonasc}.`);