const db = require('../../base/base-connect.js');

const { Change } = db.import('../../base/models/Relations.js');

const ChangeController = (() => {

    const newChange = (req, res) => {
        var change = req.body.change;
        Change.newChange(change, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };

    const getNewChanges = (req, res) => {
        Change.getNewChanges(function(success, data) {
            res.end(JSON.stringify(data));
        });
    }

    const getAllChanges = (req, res) => {
        Change.getAllChanges(function(success, data) {
            res.end(JSON.stringify(data));
        });
    }
    const getChange = (req, res) => {
        var id = req.query.id;
        Change.getChange(id, function(success, data) {
            res.end(JSON.stringify(data));
        });
    }

    const dodijeliOdboru = (req, res) => {
        var changeId = req.body.changeId;
        Change.dodijeliOdboru(changeId, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };

    const getChangeBoard = (req, res) => {
        Change.getChangeBoard(function(success, data) {
            res.end(JSON.stringify(data));
        });
    }

    const approved = (req, res) => {
        var changeId = req.body.changeId;
        Change.approved(changeId, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };
    const dodijeliTehnicaru = (req, res) => {
        var changeId = req.body.changeId;
        Change.dodijeliTehnicaru(changeId, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };

    const updateChange = (req, res) => {
        var change = req.body.change;
        Change.updateChange(change, function(success, data) {
            res.end(JSON.stringify(data));
        });
    };

    const getChangesForTech = (req, res) => {
        Change.getChangeForTech(function(success, data) {
            res.end(JSON.stringify(data));
        });
    };
    return {
        newChange : newChange,
        getNewChanges : getNewChanges,
        getAllChanges : getAllChanges,
        getChange : getChange,
        dodijeliOdboru : dodijeliOdboru,
        getChangeBoard : getChangeBoard,
        approved : approved,
        dodijeliTehnicaru : dodijeliTehnicaru,
        updateChange : updateChange,
        getChangesForTech : getChangesForTech
        
    }
})();

module.exports = ChangeController;