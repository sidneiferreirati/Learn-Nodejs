const express = require("express")
const UserModel = require("../src/models/user.model")
const port = 8080
const app = express()
app.use(express.json())

app.set("view engine", "ejs")
app.set("views", "src/views")

app.get("/views/users", async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.render("index", { users })
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.get("/home", (req, res) => {
  res.setHeader("content-type", "text/html")
  res.status(200)
  res.send("<h1>Home com Express</h1>")
})

// app.get("/user", (req, res) => {
//   const users = [
//     {
//       nome: "Sidnei",
//       sobreNome: "Ferreira",
//       email: "sidnei@gmail.com",
//     },
//     {
//       nome: "Renata",
//       sobreNome: "Pereira",
//       email: "renata@gmail.com",
//     },
//   ]
//   res.setHeader("content-type", "application/json")
//   res.status(200)
//   res.send(JSON.stringify(users))
// })

// Adicionar um usuario ao banco de dados
app.post("/user", async (req, res) => {
  try {
    const user = await UserModel.create(req.body)

    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})
// Buscar um usuario no banco
app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findById(id)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})
// Buscar todos os usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send(error.message)
  }
})
// Atualizar um usuario
app.patch("/user/:id", async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

// Deletar um Usuario
app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findByIdAndRemove(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.listen(port, () => {
  console.log("Rodando com express na porta ", port)
})
