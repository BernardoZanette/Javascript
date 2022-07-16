// Faça um script que receba o nome
// e a idade de uma pessoa. Considere
// apenas anos completos. Mostre quantos 
// dias de vida ela possui. Considere o ano
// com 365 dias.

const nome = prompt("Digite o seu nome")
const idade = parseInt(prompt(nome + ", quantos anos você tem?"))

alert(nome + ", você tem " + idade * 365 + " dias")

