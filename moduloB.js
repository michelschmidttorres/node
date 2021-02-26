// O modo abaixo(definir os exports em um objeto) NÃO É POSSÍVEL COM "this" e "exports"
// Como modulo é um objeto, essa é uma boa prática de exportação:
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}