const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    address: String,
    phone: Number,
    role: String,
    native: String,
    location: String
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel;