const fs = require("fs")
const path = require("path")

// Criar uma pasta
fs.mkdir(path.join(__dirname, "test"), (error) => {
  if (error) {
    return console.log("Error", error)
  }
  console.log(`Pasta criada com sucesso`)
})
// Cria um arquivo
fs.writeFile(
  path.join(__dirname, "test", "text.txt"),
  "Hello word ",
  (error) => {
    if (error) {
      return console.log("Error ", error)
    }
    console.log("Arquivo criado com sucesso! ")

    // Adiciona um arquivo ja criado
    fs.appendFile(path.join(__dirname, "test/text.txt"), "NodeJs ", (error) => {
      if (error) {
        return console.log("Erro: ", error)
      }
      console.log("Arquivo modificado com sucesso...")
    })

    // Ler um arquivo
    fs.readFile(
      path.join(__dirname, "test/text.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          return console.log(error)
        } else {
          console.log(data)
        }
      }
    )
  }
)
