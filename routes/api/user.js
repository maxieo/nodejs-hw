const express = require("express");
const { validateBody, validateToken } = require("../../middlewares");
const { authUserSchema } = require("../../schemas/users/authUserSchema");
const { updateSubsSchema } = require("../../schemas/users/updateSubsSchema");
const { signup, login, logout, current, updateSubs } = require("../../controllers/auth");
const asyncWrapper = require("../../helpers/asyncWrapper");

const usersRouter = express.Router();

usersRouter.post("/signup", validateBody(authUserSchema), asyncWrapper(signup));
usersRouter.post('/login', validateBody(authUserSchema), asyncWrapper(login))
usersRouter.post('/logout', validateToken(), asyncWrapper(logout))
usersRouter.post('/current', validateToken(), asyncWrapper(current))
usersRouter.patch('/', validateToken(), validateBody(updateSubsSchema), asyncWrapper(updateSubs))

module.exports = usersRouter;
