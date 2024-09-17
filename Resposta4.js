//Faça um algoritmo que peça as 4 notas bimestrais e mostre a média.
const prompt = require("prompt-sync")()

let Media1 = parseFloat(prompt("Digite a primeira nota: "))

let Media2 = parseFloat(prompt("Digite a segunda nota: "))

let Media3 = parseFloat(prompt("Digite a terceira nota "))

let Media4 = parseFloat(prompt("Digite a quarta nota: "))

let soma = (Media1 + Media2 + Media3 + Media4) / 4

console.log(`A nota desse aluno è:${soma}`)