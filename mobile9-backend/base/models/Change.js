const Sequelize = require('sequelize');
const db = require('../base-connect');

const Responses = require('../../helpers/responses');

const Change = db.define('change', {
    //za usera i admina
    title : Sequelize.STRING,
    description : Sequelize.STRING,
    
    priority : Sequelize.STRING,
    status : Sequelize.STRING,
    begin : Sequelize.DATE,
    end : Sequelize.DATE,
    approved : Sequelize.BOOLEAN,
    //ovo je novo
    category : Sequelize.STRING,
    finansira : Sequelize.STRING,
    cijena : Sequelize.INTEGER,
    infrastruktura: Sequelize.STRING,
    resursi : Sequelize.STRING,
    servis : Sequelize.STRING,
    uprvalja : Sequelize.STRING,
    dodijeliTehnicaru : Sequelize.BOOLEAN,
    dodijeliOdboru :Sequelize.BOOLEAN,
    isChange : Sequelize.BOOLEAN
    
    
});

Change.newChange = function(change, fn) {
    console.log("evo u backendu");
    console.log(change);
    Change.create({
        title : change.title,
        description : change.description,
        
        priority : change.priority,
        status : change.status,
        begin : change.begin,
        end : change.end,
        approved : change.approved,
        //ovo je novo
        category : change.category,
        finansira : change.finansira,
        cijena : change.cijena,
        infrastruktura: change.infrastruktura,
        resursi : change.resursi,
        servis : change.servis,
        uprvalja : change.uprvalja,
        dodijeliTehnicaru : change.dodijeliTehnicaru,
        dodijeliOdboru : change.dodijeliOdboru,
        isChange : change.isChange
    })
    .then(change => {
        return fn('yes', Responses.OK(change));
    })
    .catch(error => {
        return fn (null, Responses.NOK(error.message));
    });
}

Change.dodijeliOdboru = function(changeId, fn) {
    Change.update({
        dodijeliOdboru : true
    },
    {
        where : {
            id : changeId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}
Change.approved = function(changeId, fn) {
    Change.update({
        approved : true
    },
    {
        where : {
            id : changeId
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}
Change.dodijeliTehnicaru = function(changeId, fn) {
    if( approved ==false && dodijeliOdboru==true) throw error;
    if( approved ==true && dodijeliOdboru==false) throw error;
    Change.update({
        dodijeliTehnicaru : true
    },
    {
        
        where : {
            id : changeId,
            approved : true,
            dodijeliOdboru : true

        },
        where : {
            id : changeId,
            approved : false,
            dodijeliOdboru : false

        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    });
}
Change.updateChange = function(change, fn) {
    Change.update({
        title : change.title,
        description : change.description,
        priority : change.priority,
        status : change.status,
        category : change.category,
        approved : false,
        dodijeliOdboru : false,
        dodijeliTehnicaru : false,
        isChange : true
    }, {
        where : {
            id : change.id
        }
    })
    .then(updated => {
        return fn('yes', Responses.OK('Successfully updated.'));
    })
    .catch(error => {
        return fn(null, Responses.NOK(error.message));
    })
}
module.exports = function(db, DataType) {
    return Change;
}