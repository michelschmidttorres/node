const moduloA = require('../../moduloA')
console.log(moduloA.ola)
const saudacao = require('saudacao')
console.log(saudacao.ola)

// O arquivo index.js é lido por padrão 
const c = require('./pastaC')
console.log(c.ola2)


// http é um modulo core do node
// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)