const Sequelize = require('sequelize');
const db = require('../base-connect');
var Log = db.import('./Log.js');

var Solution = db.import('./Solution.js');

const Responses = require('../../helpers/responses');

const Problem = db.define('problem', {
    //za usera i admina
    title : Sequelize.STRING,
    description : Sequelize.STRING,
    consequences : Sequelize.STRING,
    //za managera problema
    priority : Sequelize.STRING,
    status : Sequelize.STRING,
    isProblem : Sequelize.BOOLEAN,
    processed : Sequelize.BOOLEAN,
    category : Sequelize.STRING
    //ovo je novo
    /*category : Sequelize.STRING,
    grupa : Sequelize.STRING,
    representative : Sequelize.STRING,
    opisProblema : Sequelize.STRING,
    dodijeliTehnicaru : Sequelize.BOOLEAN,
    //za menadzera promjena
    isChange : Sequelize.BOOLEAN*/
    
});

Problem.newProblem = function(problem, fn) {
    Problem.create({
        title : problem.title,
        description : problem.description,
        consequences : problem.consequences,
        
        priority : problem.priority,
        status : problem.status,
        userId : problem.user.id,
        isProblem : problem.isProblem,
        processed : false,
        category : ''

        /*category : problem.category,
        grupa : problem.grupa,
        representative : problem.representative,
        opisProblema : problem.opisProblema,
        dodijeliTehnicaru : problem.dodijeliTehnicaru,
        //za menadzera promjena
        isChange : problem.isChange*/
    })
    .then(problem => {
        return fn('yes', Responses.OK(problem));
    })
    .catch(error => {
        return fn (null, Responses.NOK(error.message));
    });
}

Problem.updateProblem = function(problem, fn) {
    Problem.findOne({
        where: {
           id: problem.id
        }
     }).then(function(oldProblem) {
        if (!oldProblem) {
            return 'not found';
        }
        logList = [];

        Solution.findOne({where:{ id : problem.solution.id}}).then( (oldSolution) => {
            if(oldProblem.title != problem.title)
                logList.push(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ` Title changed from ${oldProblem.title} to ${problem.title}.`)
            if(oldProblem.description != problem.description)
                logList.push(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ` Description changed from ${oldProblem.description} to ${problem.description}`)
            if(oldProblem.consequences != problem.consequences)
                logList.push(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ` Consequences changed from ${oldProblem.consequences} to ${problem.consequences}`)
            if(oldProblem.priority != problem.priority)
                logList.push(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ` Priority changed from ${oldProblem.priority} to ${problem.priority}`)
            if(oldProblem.status != problem.status)
                logList.push(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ` Status changed from ${oldProblem.status} to ${problem.status}`)
            if(oldProblem.isProblem != problem.isProblem)
                logList.push(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ` IsProblem changed from ${oldProblem.isProblem} to ${problem.isProblem}`)
            if(oldProblem.processed != problem.processed)
                logList.push(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ` Proccesed changed from ${oldProblem.processed} to ${problem.processed}`)
            if(oldProblem.category != problem.category)
                logList.push(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ` Category changed from ${oldProblem.category} to ${problem.category}`)
            if(oldSolution.scenario != problem.solution.scenario)
                logList.push(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ` Solution scenario changed from ${oldSolution.scenario} to ${problem.solution.scenario}`)
            if(oldSolution.reason != problem.solution.reason)
                logList.push(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ` Solution reason changed from ${oldSolution.reason} to ${problem.solution.reason}`)
            if(oldSolution.permSolution != problem.solution.permSolution)
                logList.push(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ` Permanent solution changed from ${oldSolution.permSolution} to ${problem.solution.permSolution}`)
            if(oldSolution.tempSolution != problem.solution.tempSolution)
                logList.push(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ` Temporary solution changed from ${oldSolution.tempSolution} to ${problem.solution.tempSolution}`)
            


            logList.forEach(element => {
                Log.saveNewLog(element, problem.id);
            });

            Solution.updateSolution(problem.solution);

        });
        
        
     }).then( () => {
        Problem.update({
            title : problem.title,
            priority : problem.priority,
            status : problem.status,
            groupId : problem.group.id,
            category : problem.category,    
            processed : true
        }, {
            where : {
                id : problem.id
            }
        })
        .then(updated => {
            return fn('yes', Responses.OK('Successfully updated.'));
        })
        .catch(error => {
            return fn(null, Responses.NOK(error.message));
        })
     })
}

Problem.assignSolution = function(problemId, solutionId, fn) {
    Problem.update({
        solutionId : solutionId
    }, {
        where : {
            id : problemId
        }
    })
    .then(problem => {
        return fn('yes', Responses.OK('updated'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    })
}


Problem.markAsProblem = function(problemId, fn) {
    Problem.update({
        isProblem : true
    },
    {
        where : {
            id : problemId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}

Problem.dodijeliTehnicaru = function(problemId, fn) {
    Problem.update({
        dodijeliTehnicaru : true
    },
    {
        where : {
            id : problemId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}
Problem.closed = function(problemId, fn) {
    Problem.update({
        status : "closed"
    },
    {
        where : {
            id : problemId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}
Problem.done = function(problemId, fn) {
    Problem.update({
        status : "done"
    },
    {
        where : {
            id : problemId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}
Problem.progress = function(problemId, fn) {
    Problem.update({
        status : "in progress"
    },
    {
        where : {
            id : problemId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}



module.exports = function(db, DataType) {
    return Problem;
}