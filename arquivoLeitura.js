const fs = require('fs')

// __dirname é uma constante presente em todos os módulos do node que representa o diretório atual
const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// No caso de um arquivo JSON não há porque utilizar o modulo FileSystem(FS) do node
// Basta fazer um require para o arquivo JSON diretamente
const config = require('./arquivo.json')
console.log(config.db)


// Leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})