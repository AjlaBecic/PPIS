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
        })
    };

    const getAll = (req, res) => {
        Problem.getAll(function(success, data) {
            res.end(JSON.stringify(data));
        });
    };

    const getProblem = (req, res) => {
        var id = req.query.id;
        Problem.getProblem(id, function(success, data) {
            res.end(JSON.stringify(data));
        })
    }

    return {
        newProblem : newProblem,
        markAsProblem : markAsProblem,
        getAll : getAll,
        getProblem : getProblem
    }
})();

module.exports = ProblemController;