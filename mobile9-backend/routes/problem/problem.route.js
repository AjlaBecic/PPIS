const express = require('express');
const ProblemRouter = express.Router();
const ProblemController = require('./problem.controller');

ProblemRouter.post('/', ProblemController.newProblem);
ProblemRouter.put('/markProblem', ProblemController.markAsProblem);
ProblemRouter.put('/', ProblemController.updateProblem);

ProblemRouter.put('/closed', ProblemController.closed);
ProblemRouter.put('/done', ProblemController.done);
ProblemRouter.put('/progress', ProblemController.progress);

ProblemRouter.put('/dodijeliTehnicaru', ProblemController.dodijeliTehnicaru);
ProblemRouter.get('/tech', ProblemController.getProblemsTech);
ProblemRouter.get('/allRequests', ProblemController.getAllRequests);
ProblemRouter.get('/request', ProblemController.getRequest);
ProblemRouter.get('/all', ProblemController.getProcessedProblems);
ProblemRouter.get('/new', ProblemController.getNewProblems);
ProblemRouter.get('/', ProblemController.getProblem);
ProblemRouter.get('/documentation', ProblemController.getDocumentation);
ProblemRouter.get('/forTech', ProblemController.getProblemsForTech);

module.exports = ProblemRouter;