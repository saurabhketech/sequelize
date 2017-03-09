var express = require('express'); // Require express module
var app = express()
var router = express.Router(); //creatig insatnce of express function
var Sequelize = require('sequelize');
var sequelize = new Sequelize('user', 'root', '123');
<!---- user Registration ------>

router.post('/user/register', function(req, res, next) {
    var username = req.body.user_name;
    var password = req.body.password;
    var cpassword = req.body.confirm_password;
    var email = req.body.email;
    var firstname = req.body.first_name;
    var lastname = req.body.last_name;
    if ((username.length > 0) && (password.length > 0) && (cpassword.length > 0) && (email.length > 0) && (firstname.length > 0) && (lastname.length > 0)) {
        if (password == cpassword) {
            sequelize.sync().then(function() {
                return req.users.create({
                    username: username,
                    firstname: firstname,
                    lastname: lastname,
                    password: password,
                    email: email
                });
            }).then(function(detail) {
                res.json({ detail })
            });
        } else {
            req.err = "password not matched";
            next(req.err);
        }
    } else {
        req.err = "all fields are necessary";
        next(req.err);
    }
});


module.exports = router;
