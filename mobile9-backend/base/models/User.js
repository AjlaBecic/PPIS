const Sequelize = require('sequelize');
const db = require('../base-connect');

const Responses = require('../../helpers/responses');

const User = db.define('user', {
    firstName : Sequelize.STRING,
    lastName : Sequelize.STRING,
    mail : Sequelize.STRING,
    userName : Sequelize.STRING,
    password : Sequelize.STRING,
    role : Sequelize.STRING
});

module.exports = function(db, DataType) {
    return User;
}