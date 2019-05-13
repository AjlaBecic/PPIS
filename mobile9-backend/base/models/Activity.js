const Sequelize = require('sequelize');
const db = require('../base-connect');

const Activity = db.define('activity', {
    type : Sequelize.STRING,
    date : Sequelize.DATE,
    description : Sequelize.STRING
});

module.exports = function(db, DataType) {
    return Activity;
}