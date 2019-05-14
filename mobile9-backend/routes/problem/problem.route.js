const express = require('express');
const ProblemRouter = express.Router();
const ProblemController = require('./problem.controller');

ProblemRouter.post('/', ProblemController.newProblem);
ProblemRouter.put('/markProblem', ProblemController.markAsProblem);
ProblemRouter.get('/all', ProblemController.getAll);
ProblemRouter.get('/', ProblemController.getProblem);

module.exports = ProblemRouter;