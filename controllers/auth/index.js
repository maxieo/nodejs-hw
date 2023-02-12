const signup = require('./signup')
const login = require('./login')
const logout = require('./logout')
const current = require('./current')
const updateSubs = require('./updateSubs')
const uploadAvatar = require('./uploadAvatar')
const sendVerification = require('./sendVerification')
const userVerification = require('./userVerification')

module.exports = {
  signup,
  login,
  logout,
  current,
  updateSubs,
  uploadAvatar,
  sendVerification,
  userVerification
}