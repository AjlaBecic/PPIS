const express = require('express');
const ActivityRouter = express.Router();
const ActivityController = require('./activity.controller');

ActivityRouter.get('/all', ActivityController.getActivites);
ActivityRouter.post('/new', ActivityController.newActivity);

module.exports = ActivityRouter;