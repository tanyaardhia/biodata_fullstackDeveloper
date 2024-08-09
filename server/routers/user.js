const express = require('express');
const AuthContoller = require('../controllers/authController');
const user = express.Router();

user.post('/register', AuthContoller.register)
user.post('/login', AuthContoller.login)

module.exports = user;
