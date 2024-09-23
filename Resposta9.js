//

const prompt = require('prompt-sync')()

//
let fahrenheit = prompt('Digite a temperatura em Fahrenheit: ')

//
fahrenheit = parseFloat(fahrenheit)

//
const celsius = 5 * ((fahrenheit - 32) /9)

//
console.log(`A temperatura em Celsius é: ${celsius.toFixed(2)}`)
