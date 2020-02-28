const express = require('express');
const route = express.Router();
const UserController = require('../controllers/userController')

const redirectLogin = (req, res, next) => {
    if(!req.session.user){
      res.redirect('/user/login')
    }else{
      next();
    }
}

route.get('/signup', UserController.signUp)
route.post('/signup', UserController.addUser)

route.get('/login', UserController.loginForm)
route.post('/login', UserController.logIn)

route.get('/profile/:id', redirectLogin, UserController.profile)
route.post('/profile/:id', redirectLogin, UserController.addFoodOfUser)
route.get('/profile/:id/sendMail', redirectLogin, UserController.sendEmail)

route.get('/logout', UserController.logout)

module.exports = route;