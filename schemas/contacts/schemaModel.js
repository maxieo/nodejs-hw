const mongoose = require("mongoose")
const { SchemaTypes } = require ('mongoose')

const schemaContacts = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
  }
})
const ContactModel = mongoose.model("contact", schemaContacts)

module.exports = {
 ContactModel 
}