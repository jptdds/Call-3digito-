// Função para Adição
function adicao() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 + num2;
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado.toFixed(3)}`;
}

// Função para Subtração
function subtracao() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 - num2;
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado.toFixed(3)}`;
}

// Função para Multiplicação
function multiplicacao() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 * num2;
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado.toFixed(3)}`;
}

// Função para Divisão
function divisao() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('resultado').innerHTML = 'Resultado: Erro! Divisão por zero.';
    } else {
        let resultado = num1 / num2;
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado.toFixed(3)}`;
    }
}

// Função para Porcentagem
function porcentagem() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = (num1 * num2) / 100;
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado.toFixed(3)}%`;
}

// Função para Logaritmo Natural (base e)
function logaritmo() {
    let num1 = parseFloat(document.getElementById('num1').value);
    if (num1 <= 0) {
        document.getElementById('resultado').innerHTML = 'Resultado: Erro! Logaritmo de número menor ou igual a zero.';
    } else {
        let resultado = Math.log(num1);
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado.toFixed(3)}`;
    }
}

// Função para Logaritmo de base 10
function logaritmoBase10() {
    let num1 = parseFloat(document.getElementById('num1').value);
    if (num1 <= 0) {
        document.getElementById('resultado').innerHTML = 'Resultado: Erro! Logaritmo de número menor ou igual a zero.';
    } else {
        let resultado = Math.log10(num1);
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado.toFixed(3)}`;
    }
}
