const Sequelize = require('sequelize');
const db = require('../base-connect');

const Group = db.define('group', {
    name : Sequelize.STRING,
    description : Sequelize.STRING
});

module.exports = function(db, DataType) {
    return Group;
} 