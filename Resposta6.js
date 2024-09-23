//

const prompt = require('prompt-sync')()

//
const pi = 3.14

// 
const raio = parseFloat(prompt('Digite o raio do circulo: '))

//
const area = pi * (raio ** 2)

//
console.log(`A área do circulo é ${area}`)