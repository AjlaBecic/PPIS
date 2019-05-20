const db = require('../../base/base-connect.js');

const { Problem } = db.import('../../base/models/Relations.js');

const ProblemController = (() => {
    const newProblem = (req, res) => {
        var problem = req.body.problem;
        Problem.newProblem(problem, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };

    const markAsProblem = (req, res) => {
        var problemId = req.body.problemId;
        Problem.markAsProblem(problemId, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };

    const getAllRequests = (req, res) => {
        Problem.getAllRequests(function(success, data) {
            res.end(JSON.stringify(data));
        });
    };

    const getRequest = (req, res) => {
        var id = req.query.id;
        Problem.getRequest(id, function(success, data) {
            res.end(JSON.stringify(data));
        });
    }


    const getNewProblems = (req, res) => {
        Problem.getNewProblems(function(success, data) {
            res.end(JSON.stringify(data));
        });
    }

    const getProcessedProblems = (req, res) => {
        Problem.getProcessedProblems(function(success, data) {
            res.end(JSON.stringify(data));
        });
    }

    const getProblem = (req, res) => {
        var id = req.query.id;
        Problem.getProblem(id, function(success, data) {
            res.end(JSON.stringify(data));
        });
    }

    return {
        newProblem : newProblem,
        markAsProblem : markAsProblem,
        getAllRequests : getAllRequests,
        getRequest : getRequest,
        getNewProblems : getNewProblems,
        getProcessedProblems : getProcessedProblems,
        getProblem : getProblem
    }
})();

module.exports = ProblemController;