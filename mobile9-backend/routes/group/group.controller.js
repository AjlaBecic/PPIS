const db = require('../../base/base-connect.js');

const { Group } = db.import('../../base/models/Relations.js');

const GroupController = (() => {
    const getAll = (req, res) => {
        Group.getAll(function(success, data) {
            res.end(JSON.stringify(data));
        });
    };

    return {
        getAll : getAll
    }
})();

module.exports = GroupController;