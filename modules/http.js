const http = require("http")

const port = 8080

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "content-type": "text/html" })
    res.end("<h1>Home</h1>")
  }

  if (req.url === "/users") {
    const users = {
      firstName: "Felipe",
      lastName: "Rocha",
      email: "felipe@gmail",
    }
    res.writeHead(200, { "content-type": "application/json" })
    res.end(JSON.stringify(users))
  }
})
server.listen(port, () => {
  console.log("Rodando na porta ", port)
})
