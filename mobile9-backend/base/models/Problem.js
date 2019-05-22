const Sequelize = require('sequelize');
const db = require('../base-connect');

const Responses = require('../../helpers/responses');

const Problem = db.define('problem', {
    //za usera i admina
    title : Sequelize.STRING,
    description : Sequelize.STRING,
    consequences : Sequelize.STRING,
    //za managera problema
    priority : Sequelize.STRING,
    status : Sequelize.STRING,
    isProblem : Sequelize.BOOLEAN,
    processed : Sequelize.BOOLEAN,
    category : Sequelize.STRING
    //ovo je novo
    /*category : Sequelize.STRING,
    grupa : Sequelize.STRING,
    representative : Sequelize.STRING,
    opisProblema : Sequelize.STRING,
    dodijeliTehnicaru : Sequelize.BOOLEAN,
    //za menadzera promjena
    isChange : Sequelize.BOOLEAN*/
    
});

Problem.newProblem = function(problem, fn) {
    Problem.create({
        title : problem.title,
        description : problem.description,
        consequences : problem.consequences,
        
        priority : problem.priority,
        status : problem.status,
        userId : problem.user.id,
        isProblem : problem.isProblem,
        processed : false,
        category : ''

        /*category : problem.category,
        grupa : problem.grupa,
        representative : problem.representative,
        opisProblema : problem.opisProblema,
        dodijeliTehnicaru : problem.dodijeliTehnicaru,
        //za menadzera promjena
        isChange : problem.isChange*/
    })
    .then(problem => {
        return fn('yes', Responses.OK(problem));
    })
    .catch(error => {
        return fn (null, Responses.NOK(error.message));
    });
}

Problem.updateProblem = function(problem, fn) {
    Problem.update({
        title : problem.title,
        priority : problem.priority,
        status : problem.status,
        groupId : problem.group.id,
        category : problem.category,
        processed : true
    }, {
        where : {
            id : problem.id
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    })
}

Problem.assignSolution = function(problemId, solutionId, fn) {
    Problem.update({
        solutionId : solutionId
    }, {
        where : {
            id : problemId
        }
    })
    .then(problem => {
        return fn('yes', Responses.OK('updated'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    })
}


Problem.markAsProblem = function(problemId, fn) {
    Problem.update({
        isProblem : true
    },
    {
        where : {
            id : problemId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

Problem.dodijeliTehnicaru = function(problemId, fn) {
    Problem.update({
        dodijeliTehnicaru : true
    },
    {
        where : {
            id : problemId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}
Problem.closed = function(problemId, fn) {
    Problem.update({
        status : "closed"
    },
    {
        where : {
            id : problemId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}
Problem.done = function(problemId, fn) {
    Problem.update({
        status : "done"
    },
    {
        where : {
            id : problemId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}
Problem.progress = function(problemId, fn) {
    Problem.update({
        status : "in progress"
    },
    {
        where : {
            id : problemId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

module.exports = function(db, DataType) {
    return Problem;
}