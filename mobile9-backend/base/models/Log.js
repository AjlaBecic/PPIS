const Sequelize = require('sequelize');
const db = require('../base-connect');

const Log = db.define('log', {
    activity : Sequelize.STRING,
    value : Sequelize.STRING,
    date : Sequelize.DATE
});

module.exports = function(db, DataType) {
    return Log;
}