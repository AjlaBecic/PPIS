const Sequelize = require('sequelize');
const db = require('../base-connect');

const Solution = db.define('solution', {
    reason : Sequelize.STRING,
    tempSolution : Sequelize.STRING,
    permSolution : Sequelize.STRING
});

module.exports = function(db, DataType) {
    return Solution;
}