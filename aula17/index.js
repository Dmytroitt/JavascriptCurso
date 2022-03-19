//VOCE SO PODE ACESSAR A FUNÇÃO , SE EXISTIREM VARIAVEIS DENTRO
// DA fUNÇAI VOCE N PODE ACESSALAS
//O RETURN DENTRO DE UMA FUNÇÂO È O ULTIMO COMANDO OU SEJA
// OQ ESTIVER ABAIXO DELE NAO SERA EXECUTADO
// sempre coloque um valor padrao na função, exemplo: function função(x = 1 , x = 2)  

/*
function soma(x = 1, y = 1) {
    const resultado = x + y; 
    return resultado;
}
const resultado = soma(4 , 2);
console.log(resultado)
*/



const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
