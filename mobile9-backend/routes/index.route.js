const express = require('express');
const AppRouter = express.Router();

const AuthRouter = require('./auth/auth.route');
const ProblemRouter = require('./problem/problem.route');

AppRouter.use('/user', AuthRouter);
AppRouter.use('/problem', ProblemRouter);

module.exports = AppRouter;