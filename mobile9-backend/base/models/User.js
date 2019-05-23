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

User.findUser = function(user, fn) {
    User.findOne({
        where : {
            username : user.username,
            password : user.password
        }
    })
    .then(user => {
        if (user)
            return fn('yes', Responses.OK(user));
        else    
            return fn('no', Responses.BAD_REQUEST('Username and/or password are incorrect.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    })
}

module.exports = function(db, DataType) {
    return User;
}