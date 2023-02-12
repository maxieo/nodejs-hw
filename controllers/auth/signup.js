const bcrypt = require('bcrypt')
const { User } = require('../../models/user')
const { HttpError } = require('../../helpers/httperror')

const signup = async (req, res, next) => { 
  const { email, password } = req.body
  const verification = await User.findOne({ email })
  
  if (verification) return next(new HttpError(409, 'this email or password already exists'))
  
  const salt = await bcrypt.genSalt()
  const hashPassword = await bcrypt.hash(password, salt)
  const verificationToken = v4();
  const savedUser = await User.create({ email, password: hashPassword })
  
  res.status(201).json({ user: savedUser })
  await sendMail({ email, verificationToken });

  res.status(201).json({ user: savedUser });
};



module.exports = signup