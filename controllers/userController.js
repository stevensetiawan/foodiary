const { User } = require('../models')
const bcrypt = require('bcrypt')

class UserController {
    static signUp (req, res){
        res.render('signup')
    }
    static addUser(req, res){
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let email = req.body.email;
        let password = req.body.password;
        let role = 'customer';
        User.create({
            first_name, last_name, email, password, role
        })
        .then(result => {
            res.redirect('/')
        }).catch(err => {
            res.send(err)
        })
    }
    static logIn(req, res){
        let email = req.body.email
        let password = req.body.password
        User.findOne({where: {email}})
        .then(data => {
            if(data){
                if(bcrypt.compareSync(password, data.password)){
                    req.session.user = {
                        name: `${data.first_name} ${data.last_name}`,
                        role: data.role
                    }
                    res.redirect('/foods')
                }else{
                    throw new Error ('Wrond Password')
                }
            }else{
                throw new Error ('Wrong email')
            }
        }).catch(err => {
            res.send(err)
        })
    }
}

module.exports = UserController