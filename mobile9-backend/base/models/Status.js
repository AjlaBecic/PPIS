const Sequelize = require('sequelize');
const db = require('../base-connect');

const Status = db.define('status', {
    name : Sequelize.STRING
});

module.exports = function(db, DataType) {
    return Status;
}