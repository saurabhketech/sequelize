// the middleware function
var Sequelize = require('sequelize');
var sequelize = new Sequelize('user', 'root', '123');

module.exports = function() {
    var User = sequelize.define('user', {
        username: Sequelize.STRING,
        firstname: Sequelize.STRING,
        lastname: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING
    });

    return function(req, res, next) {
        req.users = User;
        next();
    }
}
