//Faça um algoritmo que peça dois números e imprima a soma.
const prompt = require("prompt-sync")()

let Valor1 = parseInt(prompt("Digite um número de sua soma: "))

let Valor2 = parseInt(prompt("Digite um número de sua soma: "))

let soma = Valor1 + Valor2

console.log(`A soma de ${Valor1} com ${Valor2} é ${soma}`)
