const {ContactModel} = require ("../schemas/contacts/schemaModel")

const listContacts = async () => {
  try {
    const data = await ContactModel.find({})
    return data
  } catch (error) {
    console.log(error.message)
  }
}

const getContactById = async (id) => {
  try {
    const data = await ContactModel.findById(id)
    return data
  } catch (error) {
    console.log(error.message);
  }
}

const removeContact = async (id) => {
  try {
    const data = await ContactModel.findByIdAndRemove(id)
    return data
  } catch (error) {
    console.log(error.message);
  }
}

const addContact = async (body) => {
  try {
    const data = await ContactModel.create(body)
    console.log(data);
    return data
  } catch (error) {
    console.log(error.message);
  }
}

const updateContact = async (id, body) => {
  try {
    const data = await ContactModel.findByIdAndUpdate(id, { $set: { ...body } })
    return data
  } catch (error) {
   console.log(error.message); 
  }
}

const updateStatusContact = async(contactId, body) => {
  try {
    const data = await ContactModel.findByIdAndUpdate(contactId, {$set: {...body}})
    if (!data){
      res.status(404).json({"message": "Not found"})
    }
    return data
  } catch (error) {
    console.log(error.message); 
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact
}
