const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
// Pelo fato do node fazer cache dos imports(require) como contadorA e contadorB fazer referencia ao mesmo modulo
// O que é feito em um reflete no outro
console.log(contadorA.valor, contadorB.valor)

// Para driblar esse comportamento - ou seja realmente gerar uma nova instancia
// (VER instanciaNova.js) usar função Factory
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
