const express = require('express');
const AuthContoller = require('../controllers/authController');
const user = express.Router();

user.post('/register', AuthContoller.UserRegister)
user.post('/admin/register', AuthContoller.AdminRegister)
user.post('/login', AuthContoller.login)

module.exports = user;
