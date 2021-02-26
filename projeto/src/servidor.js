const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const bancoDeDados = require('./bancoDeDados')

/* app.use - Processa qualquer requisição enviada para esta porta independemente da URL
estamos usando a lib bodyParser que vai avaliar todas as requisição e cada vez que for do tipo "urlencoded" ela vai "PARSEAR" o
requisição para um objeto no padrão usado na função app.post
*/
app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// }) //Só pra entender o padrão chain of responsibility

// app.get('/produtos', (req, res, next) => {
//     res.send({nome: 'Notebook', preco: 123.45}) //Converte para JSON
// })

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

// Quando desejado obter paramentos via URL, é usado a notação :param, no exemplo abaixo /produtos/:id
// Para usar o parametro invoca-se req.params.nomeDoParamentro no no caso conforme a linha 30 id "req.params.id".
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

// Para que o trecho abaixo possa funcionar é necessário instalar na aplicação um módulo do node chamado "body-parser"
// Na pasta da apliacação no terminal: npm i --save body-parser
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

// Para alterar um produto existente
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

// Para excluir
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})