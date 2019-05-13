const Sequelize = require('sequelize');
const db = require('../base-connect');

const Activity = db.import(__dirname + '/Activity.js');
const Group = db.import(__dirname + '/Group.js');
const Log = db.import(__dirname + '/Log.js');
const Problem = db.import(__dirname + '/Problem.js');
const ProblemStatus = db.import(__dirname + '/ProblemStatus.js');
const Solution = db.import(__dirname + '/Solution.js');
const Status = db.import(__dirname  + '/Status.js');
const User = db.import(__dirname + '/User.js');

Problem.belongsTo(User);
Problem.belongsTo(Group);
Problem.belongsTo(Solution);

Log.belongsTo(User);
Log.belongsTo(Problem);

ProblemStatus.belongsTo(Problem);
ProblemStatus.belongsTo(User);
ProblemStatus.belongsTo(Status);

Activity.belongsTo(Problem);
Activity.belongsTo(User);

db.sync();

module.exports = function(db, DataType) {
    return {Activity, Group, Log, Problem, ProblemStatus, Solution, Status, User};
}
