console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

// exports é uma variável que aponta para module.exports
exports = null
console.log(module.exports)

// Por isso que por essa definição não é possível usar um objeto com exports
exports = {
    nome: 'Teste'
}

console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

module.exports = { publico: true }