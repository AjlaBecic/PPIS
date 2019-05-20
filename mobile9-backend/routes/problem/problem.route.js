const express = require('express');
const ProblemRouter = express.Router();
const ProblemController = require('./problem.controller');

ProblemRouter.post('/', ProblemController.newProblem);
ProblemRouter.put('/markProblem', ProblemController.markAsProblem);
ProblemRouter.get('/allRequests', ProblemController.getAllRequests);
ProblemRouter.get('/request', ProblemController.getRequest);
ProblemRouter.get('/all', ProblemController.getProcessedProblems);
ProblemRouter.get('/new', ProblemController.getNewProblems);
ProblemRouter.get('/', ProblemController.getProblem);

module.exports = ProblemRouter;