const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    avatarURL: String,
    token: {
      type: String,
      default: null,
    },
  }
)

module.exports = {
  userSchema
}