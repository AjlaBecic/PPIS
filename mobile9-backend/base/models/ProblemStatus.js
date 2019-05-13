const Sequelize = require('sequelize');
const db = require('../base-connect');

const Responses = require('../../helpers/responses');

const ProblemStatus = db.define('problemstatus', {

});

ProblemStatus.updateStatus = function(status, fn) {
    ProblemStatus.update({
        statusId : status.statusId,
        userId : status.userId,
    }, {
        where : {
            problemId : status.problemId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfuly updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    })
}

module.exports = function(db, DataType) {
    return ProblemStatus;
}