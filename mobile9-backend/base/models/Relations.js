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
const Change = db.import(__dirname + '/Change.js');


Problem.belongsTo(User);
Problem.belongsTo(Group);
Problem.belongsTo(Solution);
//Problem.belongsTo(Status);

Change.belongsTo(User);
Change.belongsTo(Problem);
Change.belongsTo(Solution);
//Change.belongsTo(Status);

Log.belongsTo(User);
Log.belongsTo(Problem);


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

Change.getNewChanges = function(fn) {
    Change.findAll({
        include : [
           {
               model : User, as : 'user'
           }
        ],
        where : {
            isChange : false
            
        }
    })
    .then(changes => {
        return fn('yes', Responses.OK(changes));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}
Change.getAllChanges = function(fn) {
    Change.findAll({
        include : [
           {
               model : User, as : 'user'
           }
        ],
        where : {
            isChange : true
            
        }
    })
    .then(changes => {
        return fn('yes', Responses.OK(changes));
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

Change.getChangeBoard = function(fn) {
    Change.findAll({
        include : [
           {
               model : User, as : 'user'
           }
        ],
        where : {
            dodijeliOdboru : true 
        }
    })
    .then(changes => {
        return fn('yes', Responses.OK(changes));
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

Problem.getMyRequests = function(id, fn) {
    Problem.findAll({
        include : [
            {
                model : User, as : 'user'
            }
        ],
        where : {
            UserId : id
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

Change.getChange = function(id, fn) {
    Change.findOne({
        include : [
            {
                model : User, as : 'user'
            }
        ],
        where : {
            id : id
        }
    })
    .then(change => {
        return fn('yes', Responses.OK(change));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

db.sync();

module.exports = function(db, DataType) {
    return {Activity, Group, Log, Problem, Solution, User, Change};
}
