// External Dependancies
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  description: String,
  qty: Number,
})

module.exports = mongoose.model('items', userSchema)
