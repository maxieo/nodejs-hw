const { HttpError } = require("../../helpers/httperror");
const { User } = require("../../models/user");

const updateSubs = async (req, res, next) => {
  const { _id } = req.User;
  const { subscription } = req.body;

  const user = await User.findById(_id);

  if (!user || !user?.token) return next(new HttpError(401, "Not authorized"));
  const updateUser = await User.findByIdAndUpdate(
    _id,
    { subscription: subscription },
    { new: true }
  );

  res.json({
    email: user.email,
    subscription: updateUser.subscription,
  });
}

module.exports = updateSubs