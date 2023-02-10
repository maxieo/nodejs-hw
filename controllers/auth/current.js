const { HttpError } = require('../../helpers/httperror');
const { User } = require('../../models/user');

const current = async (req, res, next) => { 
  const { _id } = req.User
  const user = await User .findById(_id)

  if (!user || !user?.token) return next(new HttpError(401, 'Not authorized'));

  res.json({
    email: user.email,
    subscription: user.subscription,
  });
}

module.exports = current
