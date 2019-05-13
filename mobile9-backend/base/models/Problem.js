const Sequelize = require('sequelize');
const db = require('../base-connect');

const Responses = require('../../helpers/responses');

const Problem = db.define('problem', {
    title : Sequelize.STRING,
    description : Sequelize.STRING,
    consequences : Sequelize.STRING
});

Problem.newProblem = function(problem, fn) {
    Problem.create({
        title : problem.title,
        description : problem.description,
        consequences : problem.consequences,
        userId : problem.userId
    })
    .then(problem => {
        return fn('yes', Responses.OK(problem));
    })
    .catch(error => {
        return fn (null, Responses.NOK(error.message));
    });
}

module.exports = function(db, DataType) {
    return Problem;
}