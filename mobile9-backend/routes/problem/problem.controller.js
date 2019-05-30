const db = require('../../base/base-connect.js');

const { Problem, Solution } = db.import('../../base/models/Relations.js');

const ProblemController = (() => {
    const newProblem = (req, res) => {
        var problem = req.body.problem;
        Problem.newProblem(problem, function(success, data) {
            Solution.newSolution(function(success, _data) {
                if (success === 'yes') {
                    Problem.assignSolution(data.data.id, _data.data.id, function(_success, __data) {
                        if (_success === 'yes')
                            res.end(JSON.stringify(data));
                        else
                            res.end(JSON.stringify(__data));
                    })
                }
                else {
                    res.end(JSON.stringify(_data));
                }
            })
            //res.end(JSON.stringify(data));
        });
    };

    const markAsProblem = (req, res) => {
        var problemId = req.body.problemId;
        Problem.markAsProblem(problemId, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };

    const markAsChange = (req, res) => {
        var problemId = req.body.problemId;
        Problem.markAsChange(problemId, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };

    const closed = (req, res) => {
        var problemId = req.body.problemId;
        Problem.closed(problemId, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };

    const done = (req, res) => {
        var problemId = req.body.problemId;
        Problem.done(problemId, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };
    const progress = (req, res) => {
        var problemId = req.body.problemId;
        Problem.progress(problemId, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };
    const dodijeliTehnicaru = (req, res) => {
        var problemId = req.body.problemId;
        Problem.dodijeliTehnicaru(problemId, function(success, data) {
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

    const getMyRequests = (req, res) => {
        var id = req.query.id;
        Problem.getMyRequests(id, function(success, data) {
            res.end(JSON.stringify(data));
        });
    }

    const getNewProblems = (req, res) => {
        Problem.getNewProblems(function(success, data) {
            res.end(JSON.stringify(data));
        });
    }

    const getProblemsTech = (req, res) => {
        Problem.getProblemsTech(function(success, data) {
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

    const updateProblem = (req, res) => {
        var problem = req.body.problem;
        Problem.updateProblem(problem, function(success, data) {
            res.end(JSON.stringify(data));
        });
    }

    const getDocumentation = (req, res) => {
        var id = req.query.id;
        Problem.getDocumentation(id, function(success, data) {
            res.end(JSON.stringify(data));
        })
    }

    const getProblemsForTech = (req, res) => {
        var id = req.query.id;
        Problem.getProblemsForTech(id, function(success, data) {
            res.end(JSON.stringify(data));
        });
    }

    const getProblemsForChange = (req, res) => {
        Problem.getProblemsForChange(function(success, data) {
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
        getProblem : getProblem,
        updateProblem : updateProblem,
        getDocumentation : getDocumentation,
        getProblemsForTech : getProblemsForTech,
        getProblemsForChange : getProblemsForChange,

        dodijeliTehnicaru: dodijeliTehnicaru,
        getProblemsTech : getProblemsTech,
        closed : closed,
        done : done,
        progress : progress,
        markAsChange : markAsChange,
        getMyRequests : getMyRequests



    }
})();

module.exports = ProblemController;