let rato = "o rato roeu a roupa do rei de roma.";

//console.log(rato.replace(/r/g, '#'))
//comando replace serve para trocar letras da string
//length serve para contar os caracteres da string (detalhe: a contagem começa em 0123)
//console.log(rato.length);
//slice serve para pegar certo caractere a certo caractere 
//slice negativo pega de tras pra frente

console.log(rato.slice(0 , 11));
console.log(rato.slice(-5 , -1)); //aparecera roma 
console.log(rato.toLowerCase(rato)); // deixa tudo minusculo
console.log(rato.toUpperCase(rato)); // deixa tudo maiusculo