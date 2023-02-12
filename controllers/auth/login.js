const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../../models/user')
const { HttpError } = require('../../helpers/httperror')

const { JWT_SECRET } = process.env

const login = async (req, res, next) => { 
  const { email, password } = req.body

  const userValid = await User.findOne({ email })
  if (!userValid)
    return next(new HttpError(401, 'email or password is wrong'))
  if (!userValid.verify)
    return next(new HttpError(401, 'Email is not verified'));
  
  const passwordValid = await bcrypt.compare(password, userValid.password)
  if (!passwordValid)
    return next(new HttpError(401, 'email or password is wrong'))
  
  const payload = { id: userValid._id }
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h'
  })

  await User.findByIdAndUpdate(
    userValid._id,
    {token: token},
    {new: true}
  )
  res.json({ token, user: {email: userValid.email, subscription: userValid.subscription} })
}

module.exports = login