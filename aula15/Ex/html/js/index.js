    const numero = Number(prompt('Digite um numero:'));
//
    const NumTil = document.getElementById('numero-titulo');
//
    const divTx = document.getElementById('texto')
//
    NumTil.innerHTML = numero;
    divTx.innerHTML = '';
    divTx.innerHTML += `<p>Raiz quarada: ${numero ** 0.5}.</p>`
    divTx.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
    divTx.innerHTML += `<p>${numero}é inteiro: ${Number.isInteger(numero)}.</p>`
    divTx.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`
    divTx.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`
    divTx.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`
