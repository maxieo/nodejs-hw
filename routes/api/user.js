const express = require("express");
const { validateBody, validateToken, uploadAva } = require("../../middlewares");
const { authUserSchema } = require("../../schemas/users/authUserSchema");
const { updateSubsSchema } = require("../../schemas/users/updateSubsSchema");
const { signup, login, logout, current, updateSubs, uploadAvatar, userVerification, sendVerification } = require("../../controllers/auth");
const asyncWrapper = require("../../helpers/asyncWrapper");

const usersRouter = express.Router();

usersRouter.post("/signup", validateBody(authUserSchema), asyncWrapper(signup));
usersRouter.post('/login', validateBody(authUserSchema), asyncWrapper(login))
usersRouter.post('/logout', validateToken(), asyncWrapper(logout))
usersRouter.post('/current', validateToken(), asyncWrapper(current))
usersRouter.patch('/', validateToken(), validateBody(updateSubsSchema), asyncWrapper(updateSubs))
usersRouter.patch('/avatars', validateToken(), uploadAva.single('avatar'), asyncWrapper((uploadAvatar)))
usersRouter.get('/verify/:verificationToken', asyncWrapper(userVerification))
usersRouter.post('/verify', validateBody(), asyncWrapper(sendVerification))

module.exports = usersRouter;