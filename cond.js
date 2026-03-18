const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));

const media = (nota1 + nota2) / 2;

let status = "";

if (media > 6) {
    status = "Aprovado";
} else if (media > 5 && media < 6) {
    status = "Em recuperação";
} else if (media < 5) {
    status = "Reprovado";
} else {
    status = "Nota limite (5 ou 6)";
}

const mensagem = `Média: ${media.toFixed(1)} - Status: ${status}`;

alert(mensagem);

document.body.innerHTML = `<h1>${mensagem}</h1>`;