// const Person = require("./person")
// const person = new Person("Sidnei")
// console.log(person.sayMyName());

// require("./modules/path")
// require("./modules/fs")

// require("./modules/http")

const connectToDataBase = require("./src/database/connect")
const dotenv = require("dotenv")
dotenv.config()
connectToDataBase()
require("./modules/express")
