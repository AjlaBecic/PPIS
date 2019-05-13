const express = require('express');
const ProblemRouter = express.Router();
const ProblemController = require('./problem.controller');

ProblemRouter.post('/', ProblemController.newProblem);

module.exports = ProblemRouter;