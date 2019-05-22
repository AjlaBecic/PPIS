const Sequelize = require('sequelize');
const db = require('../base-connect');
const Responses = require('../../helpers/responses');
const Op = Sequelize.Op;

const Activity = db.import(__dirname + '/Activity.js');
const Group = db.import(__dirname + '/Group.js');
const Log = db.import(__dirname + '/Log.js');
const Problem = db.import(__dirname + '/Problem.js');
const Solution = db.import(__dirname + '/Solution.js');
const User = db.import(__dirname + '/User.js');

Problem.belongsTo(User);
Problem.belongsTo(Group);
Problem.belongsTo(Solution);
//Problem.belongsTo(Status);

Log.belongsTo(User);
Log.belongsTo(Problem);

User.belongsTo(Group);


Activity.belongsTo(Problem);
Activity.belongsTo(User);

Problem.getAllRequests = function(fn) {
    Problem.findAll({
        include : [
           {
               model : User, as : 'user'
           }
        ],
        where : {
            isProblem : false
           
        }
    })
    .then(problems => {
        return fn('yes', Responses.OK(problems));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

User.findUser = function(user, fn) {
    User.findOne({
        where : {
            username : user.username,
            password : user.password
        },
        include : [
            {model : Group, as : 'group'}
        ]
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

Problem.getNewProblems = function(fn) {
    Problem.findAll({
        include : [
           {
               model : User, as : 'user'
           }
        ],
        where : {
            isProblem : true,
            processed : false
            
        }
    })
    .then(problems => {
        return fn('yes', Responses.OK(problems));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

Problem.getProblemsTech = function(fn) {
    Problem.findAll({
        include : [
           {
               model : User, as : 'user'
           }
        ],
        where : {
            isProblem : true,
            dodijeliTehnicaru : true
        }
    })
    .then(problems => {
        return fn('yes', Responses.OK(problems));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}


Problem.getProcessedProblems = function(fn) {
    Problem.findAll({
        include : [
           {
               model : User, as : 'user'
           }
        ],
        where : {
            isProblem : true,
            
            processed : true
        }
    })
    .then(problems => {
        return fn('yes', Responses.OK(problems));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

Problem.getRequest = function(id, fn) {
    Problem.findOne({
        include : [
            {
                model : User, as : 'user'
            }
        ],
        where : {
            id : id
        }
    })
    .then(problem => {
        return fn('yes', Responses.OK(problem));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

Problem.getProblem = function(id, fn) {
    Problem.findOne({
        include : [
            {
                model : User, as : 'user',
                model : Group, as : 'group'
            }
        ],
        where : {
            id : id
        }
    })
    .then(problem => {
        return fn('yes', Responses.OK(problem));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

Problem.getDocumentation = function(id, fn) {
    Problem.findOne({
        include : [
            {
               model : Solution, as : 'solution'
            }
        ],
        where : {
            id : id
        }
    })
    .then(problem => {
        return fn('yes', Responses.OK(problem));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

Problem.getProblemsForTech = function(groupId, fn) {
    Problem.findAll({
        include : [
            { model : User, as : 'user'}
        ],
        where : {
            groupId : groupId,
            processed : true
        }
    })
    .then(problems => {
        return fn('yes', Responses.OK(problems));
    })
    .catch(error => {
        return fn(null, Responses.OK(error.message));
    });
}

Activity.getActivites = function(problemId, fn) {
    Activity.findAll({
        include : [
            { model : User, as : 'user'}
        ],
        where : {
            problemId : problemId
        }
    })
    .then(problems => {
        return fn('yes', Responses.OK(problems));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

db.sync();

module.exports = function(db, DataType) {
    return {Activity, Group, Log, Problem, Solution, User};
}
