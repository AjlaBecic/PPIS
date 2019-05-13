const db = require('../../base/base-connect.js');

const { User} = db.import('../../base/models/Relations.js');

const AuthController = (() => {
    const login = (req, res) => {
        var user = {
            username : req.body.username,
            password : req.body.password
        };
        User.findUser(user, (success, data) => {
            res.end(JSON.stringify(data));
        });
    };

    return {
        login : login
    }
})();

module.exports = AuthController;