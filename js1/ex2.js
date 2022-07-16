// Faça um script que receba o preço de um
// produto e o percentual de desconto.
// Mostre para o usuário o valor final com
// o desconto.

const preco = parseFloat(prompt("Qual o preço do produto?"))
console.log('Preço: '+preco)
const percentual = parseInt(prompt("Qual o percentual de descontos?"))
console.log('Percentual: ' + percentual)
const pFinal = preco * (100-percentual) / 100

alert("O preço final é: R$ " + pFinal.toFixed(2))
