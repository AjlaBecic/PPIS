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
    //ovo je novo
    category : Sequelize.STRING,
    grupa : Sequelize.STRING,
    representative : Sequelize.STRING,
    opisProblema : Sequelize.STRING,
    dodijeliTehnicaru : Sequelize.BOOLEAN,
    //za menadzera promjena
    isChange : Sequelize.BOOLEAN
    
});

Problem.newProblem = function(problem, fn) {
    Problem.create({
        title : problem.title,
        description : problem.description,
        consequences : problem.consequences,
        
        priority : problem.priority,
        status : "created",
        userId : problem.user.id,
        isProblem : problem.isProblem,
        processed : false,

        category : problem.category,
        grupa : problem.grupa,
        representative : problem.representative,
        opisProblema : problem.opisProblema,
        dodijeliTehnicaru : problem.dodijeliTehnicaru,
        //za menadzera promjena
        isChange : problem.isChange
    })
    .then(problem => {
        return fn('yes', Responses.OK(problem));
    })
    .catch(error => {
        return fn (null, Responses.NOK(error.message));
    });
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

Problem.markAsChange = function(problemId, fn) {
    Problem.update({
        isChange : true
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