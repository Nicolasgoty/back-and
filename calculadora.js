
// Pedir os números ao usuário
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
// Função para soma
function soma(a, b) {
    return a + b;
}

// Função para subtração
function subtracao(a, b) {
    return a - b;
}

// Função para multiplicação
function multiplicacao(a, b) {
    return a * b;
}

// Função para divisão
function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}



// Exibir os resultados das operações
alert("Soma: " + soma(num1, num2));
alert("Subtração: " + subtracao(num1, num2));
alert("Multiplicação: " + multiplicacao(num1, num2));
alert("Divisão: " + divisao(num1, num2));