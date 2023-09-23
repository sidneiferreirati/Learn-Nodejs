const path = require("path")

// Apenas o nome do arquivo atual
console.log(path.basename(__filename))

// Nome do diretório atual
console.log(path.dirname(__filename))

// Extensao do arquivo
console.log(path.extname(__filename))

// Criar um objeto Path
console.log(path.parse(__filename))

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "teste", "test.txt"))
