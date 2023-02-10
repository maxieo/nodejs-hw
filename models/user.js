const mongoose = require('mongoose')
const { userSchema } = require('../schemas/users/userSchema')

const User = mongoose.model('user', userSchema)

module.exports = {User}