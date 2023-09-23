const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  sobrenome: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    minlenght: 7,
  },
})

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel
