const express = require('express');
const AppRouter = express.Router();

const AuthRouter = require('./auth/auth.route');
const ProblemRouter = require('./problem/problem.route');
const GroupRouter = require('./group/group.route');
const ActivityRouter = require('./activity/activity.route');

AppRouter.use('/user', AuthRouter);
AppRouter.use('/problem', ProblemRouter);
AppRouter.use('/group', GroupRouter);
AppRouter.use('/activity', ActivityRouter);

module.exports = AppRouter;