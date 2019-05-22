const Sequelize = require('sequelize');
const db = require('../base-connect');
const Responses = require('../../helpers/responses');

const Solution = db.define('solution', {
    reason : Sequelize.STRING,
    tempSolution : Sequelize.STRING,
    permSolution : Sequelize.STRING,
    scenario : Sequelize.STRING
});

Solution.newSolution = function(fn) {
    Solution.create({
        reason : '',
        tempSolution : '',
        permSolution : '',
        scenario : ''
    })
    .then(solution => {
        return fn('yes', Responses.OK(solution));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    })
}

module.exports = function(db, DataType) {
    return Solution;
}