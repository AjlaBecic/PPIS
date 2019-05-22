const express = require('express');
const GroupRouter = express.Router();
const GroupController = require('./group.controller');

GroupRouter.get('/all', GroupController.getAll);

module.exports = GroupRouter;