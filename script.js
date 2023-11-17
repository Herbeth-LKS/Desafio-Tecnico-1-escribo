function somaMultiplos(numero) {
    let soma = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}

function calcularSoma() {
    event.preventDefault()
    const inputNumero = document.getElementById("numero");
    const numero = parseInt(inputNumero.value);

    const resultado = somaMultiplos(numero);
    

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = `a soma dos numeros divisiveis por 3 e 5 : ${resultado}`;
}