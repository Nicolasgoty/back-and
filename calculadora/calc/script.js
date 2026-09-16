function calcular(operacao) {
    // Obtém os elementos dos inputs e do resultado
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const campoResultado = document.getElementById('resultado');

    // Validação caso algum campo esteja vazio
    if (isNaN(num1) || !isNaN(num2) === false) {
        campoResultado.textContent = 'Digite os 2 números';
        campoResultado.style.color = '#dc3545'; // Cor vermelha para erro
        return;
    }

    let resultadoFinal = 0;

    // Verifica qual operação foi acionada
    switch (operacao) {
        case '+':
            resultadoFinal = num1 + num2;
            break;
        case '-':
            resultadoFinal = num1 - num2;
            break;
        case '*':
            resultadoFinal = num1 * num2;
            break;
        case '/':
            // Evita a divisão por zero
            if (num2 === 0) {
                campoResultado.textContent = 'Erro (Divisão por 0)';
                campoResultado.style.color = '#dc3545';
                return;
            }
            resultadoFinal = num1 / num2;
            break;
    }

    // Exibe o resultado na tela de forma limpa
    campoResultado.textContent = resultadoFinal;
    campoResultado.style.color = '#28a745'; // Cor verde para sucesso
}
