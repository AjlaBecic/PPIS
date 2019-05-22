const Sequelize = require('sequelize');
const db = require('../base-connect');
const Responses = require('../../helpers/responses');

const Group = db.define('group', {
    name : Sequelize.STRING,
    description : Sequelize.STRING
});

Group.getAll = function(fn) {
    Group.findAll({

    })
    .then(groups => {
        console.log(groups);
        return fn('yes', Responses.OK(groups));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

module.exports = function(db, DataType) {
    return Group;
} 