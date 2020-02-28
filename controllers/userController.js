const { User, Food, UserFood } = require('../models')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
require('dotenv').config();

const getCaloriesToday = require('../helper/getCaloriesToday')
const getReport = require('../helper/getReport')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
        // user: 'adhiyatma.pramayoga@gmail.com',
        // pass: '25juli98'
    }
})

class UserController {
    static signUp (req, res){
        let error = {}
        let user = req.session.user
        res.render('signup', {error, user})
    }
    static addUser(req, res){
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let email = req.body.email;
        let password = req.body.password;
        let role = 'customer';
        User.findAll({where: {email}})
        .then(data => {
            if(data.length === 0){
                return User.create({
                first_name, last_name, email, password, role
            })}else{
                throw new Error('Email has been used')
            }
        })
        .then(result => {
            req.session.user = {
                id: result.id,
                name: result.getFullName(),
                role: result.role
            }
            res.redirect('/foods')
        }).catch(err => {
            let error = {}
            if(err.errors){
                err.errors.forEach((item) => {
                    error[item.path] = {
                        msg: item.message
                    }
                })
            }else{
                error.email = {
                    msg: err.message
                }
            }
            res.render('signup', {error})
        })
    }
    static logIn(req, res){
        let email = req.body.email
        let password = req.body.password
        User.findOne({where: {email}})
        .then(data => {
            if(data){
                return bcrypt.compare(password, data.password)
                .then(function(result) {
                    if(result){
                        req.session.user = {
                            id: data.id,
                            name: data.getFullName(),
                            role: data.role
                        }
                        res.redirect('/foods')
                    }else{
                        throw new Error('error pass')
                    }
                })
            }else{
                throw new Error ('Wrong email')
            }
        }).catch(err => {
            if(err.message){
                res.render('login', {error: {msg: err.message}})
            }
        })
    }
    static loginForm(req, res){
        let user = req.session.user
        res.render('login', {error: {}, user})
    }
    static profile(req, res){
        let id = Number(req.params.id);
        let user = req.session.user;
        let foods = null
        Food.findAll()
        .then(food => {
            foods = food
            return UserFood.findAll({where: {UserId: id}, include: Food})
        })
        .then(foodsOfUser => {
            let calories = getCaloriesToday(foodsOfUser);
            res.render('userProfile', { user, foods, foodsOfUser, calories })

        }).catch(err => {
            res.send(err)
        })
    }
    static addFoodOfUser(req, res){
        let UserId = Number(req.params.id)
        let FoodId = Number(req.body.FoodId)
        UserFood.create({
            UserId, FoodId
        })
        .then(result => {
            res.redirect(`/user/profile/${UserId}`)
        }).catch(err => {
            res.send(err)
        })
    }
    static logout(req, res){
        if(req.session.user){
            req.session.destroy(function(err) {
                if(err){
                    console.log(err)
                }
            })
            res.redirect('/')
        }else{
            res.redirect('/')
        }
    }
    static sendEmail(req, res){
        let id = Number(req.params.id);
        let today = new Date().getDay();
        let userdata = null
        let report = []
        User.findOne({where: {id}})
        .then(result1 => {
            userdata = result1;
            return UserFood.findAll({where: {UserId: id}, include: Food})
        })
        .then(data => {
            let calories = getCaloriesToday(data)
            data.forEach((item) => {
                if(new Date(item.createdAt).getDay() === today ){
                    report.push(item)
                }
            })
            let text = getReport(report, userdata, calories)
            let mailOptions = {
                from: 'foodiary@gmail.com',
                to: userdata.email,
                subject: 'Your Foodiary Report',
                text: text
            }
            transporter.sendMail(mailOptions, function(err, data) {
                if(err){
                    console.log('Error kirim email: ', err)
                } else {
                    console.log('email sent')
                    res.redirect(`/user/profile/${id}`)
                }
            })
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = UserController