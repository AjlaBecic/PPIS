const Sequelize = require('sequelize');
const db = require('../base-connect');

const Responses = require('../../helpers/responses');

const Problem = db.define('problem', {
    title : Sequelize.STRING,
    description : Sequelize.STRING,
    consequences : Sequelize.STRING,
    priority : Sequelize.STRING,
    status : Sequelize.STRING,
    isProblem : Sequelize.BOOLEAN,
    processed : Sequelize.BOOLEAN
});

Problem.newProblem = function(problem, fn) {
    Problem.create({
        title : problem.title,
        description : problem.description,
        consequences : problem.consequences,
        priority : '',
        status : '',
        userId : problem.user.id,
        isProblem : problem.isProblem,
        processed : false
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


module.exports = function(db, DataType) {
    return Problem;
}