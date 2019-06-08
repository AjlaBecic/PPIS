const Sequelize = require('sequelize');
const db = require('../base-connect');

const Log = db.define('log3', {
    activity : Sequelize.STRING,
    problem: Sequelize.INTEGER,
    department : Sequelize.STRING
});

Log.saveNewLog = (activity, department, problemId) => {
    Log.create({activity:activity, problem: problemId, department : department});
}

Log.returnAllLogsByProblemId = (id, fn) => {
    Log.findAll({where:{
        problem: id
    }}).then((response) => {
        return fn(response);
    });
}

module.exports = function(db, DataType) {
    return Log;
}