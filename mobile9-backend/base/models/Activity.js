const Sequelize = require('sequelize');
const db = require('../base-connect');
const Responses = require('../../helpers/responses');

const Activity = db.define('activity', {
    type : Sequelize.STRING,
    date : Sequelize.DATE,
    description : Sequelize.STRING
});

Activity.newActivity = function(activity, fn) {
    Activity.create({
        type : activity.type,
        date : new Date(),
        description : activity.description,
        userId : activity.user.id,
        problemId : activity.problemId
    })
    .then(activity => {
        return fn('yes', Responses.OK(activity));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

module.exports = function(db, DataType) {
    return Activity;
}