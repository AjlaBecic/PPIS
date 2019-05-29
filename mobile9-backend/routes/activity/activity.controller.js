const db = require('../../base/base-connect.js');

const { Activity } = db.import('../../base/models/Relations.js');

const ActivityController = (() => {
    const getActivites = (req, res) => {
        Activity.getActivites(req.query.id, function(success, data) {
            res.end(JSON.stringify(data));
        });
    }

    const newActivity = (req, res) => {
        var activity = req.body.activity;
        Activity.newActivity(activity, function(success, data) {
            res.end(JSON.stringify(data));
        })
    }

    return {
        getActivites : getActivites,
        newActivity : newActivity
    }
})();

module.exports = ActivityController;