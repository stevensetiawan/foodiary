const express = require('express');
const route = express.Router();
const UserController = require('../controllers/userController')

route.get('/signup', UserController.signUp)
route.post('/signup', UserController.addUser)

route.post('/login', UserController.logIn)


module.exports = route;