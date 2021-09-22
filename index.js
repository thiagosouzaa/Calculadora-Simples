var n1 // variável número 1
var n2// variável número 2
var resultado // variável resultado

if (n1.length === 0 || n2.length === 0) {
    alert('Verifique os dados novamente!')
}

function somar() {
    /* Entrada de Dados */
    n1 = Number(document.MinhaCalculadora.n1.value);
    n2 = Number(document.MinhaCalculadora.n2.value);

    /* Processamento de Dados */
    resultado = n1 + n2;

    /*Saída de Dados */
    window.alert(`O Resultado é ${resultado.toString()}`)
}

function subtrair() {
    /* Entrada de Dados */
    n1 = Number(document.MinhaCalculadora.n1.value);
    n2 = Number(document.MinhaCalculadora.n2.value);

    /* Processamento de Dados */
    resultado = n1 - n2;

    /*Saída de Dados */
    window.alert(`O Resultado é ${resultado.toString()}`)
}

function multiplicação() {
    /* Entrada de Dados */
    n1 = Number(document.MinhaCalculadora.n1.value);
    n2 = Number(document.MinhaCalculadora.n2.value);

    /* Processamento de Dados */
    resultado = n1 * n2;

    /*Saída de Dados */
    window.alert(`O Resultado é ${resultado.toString()}`)
}

function divisão() {
    /* Entrada de Dados */
    n1 = Number(document.MinhaCalculadora.n1.value);
    n2 = Number(document.MinhaCalculadora.n2.value);

    /* Processamento de Dados */
    resultado = n1 / n2;

    /*Saída de Dados */
    window.alert(`O Resultado é ${resultado.toString()}`)
}