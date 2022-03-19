//colchete = array , chaves = objeto


/*
function criaPessoa (nome , sobrenome , idade) {
    return {
        nome,sobrenome,idade
    };
}
const pessoa1 = criaPessoa('Luiz', 'miranda' , 25);
const pessoa2 = criaPessoa('maria', 'oliveira' , 25);
const pessoa3 = criaPessoa('joao', 'moreira' , 25);
const pessoa4 = criaPessoa('junior', 'lara' , 25);
const pessoa5 = criaPessoa('jean', 'otavio' , 25);
console.log(pessoa1.nome , pessoa1.sobrenome)
*/

const pessoa1 = {
    nome: 'luiz', sobrenome: 'miranda', idade: 25, 
     fala() {
        console.log(`A minha idade atual é ${this.idade}`)
        
    },
    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
