const db = require('../../base/base-connect.js');

const { Problem } = db.import('../../base/models/Relations.js');

const ProblemController = (() => {
    const newProblem = (req, res) => {
        var problem = req.body.problem;
        Problem.newProblem(problem, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };
    return {
        newProblem : newProblem
    }
})();

module.exports = ProblemController;