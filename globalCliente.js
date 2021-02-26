
// Uma vez feito isso ele carregará o global para aplicação inteira - 
// Será possível usar as atualizações em outros arquivos
require('./global')

// Usar com muito cuidado em situações especiais - IDEAL É USAR O SISTEMA DE MÓDULOS
console.log(MinhaApp.saudacao())

// Algo Global passível de modificação - NÃO É LEGAL
// Usar o Object.freeze - tornar imutável
MinhaApp.nome='Eita!'
console.log(MinhaApp.nome)