const express = require('express');
const AppRouter = express.Router();

const AuthRouter = require('./auth/auth.route');
const ProblemRouter = require('./problem/problem.route');

const ChangeRouter = require('./change/change.route');

AppRouter.use('/user', AuthRouter);
AppRouter.use('/problem', ProblemRouter);
AppRouter.use('/change', ChangeRouter);

module.exports = AppRouter;