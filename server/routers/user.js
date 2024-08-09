const express = require('express');
const Contoller = require('../controllers/controller');
const user = express.Router();

user.post('/register', Contoller.register)
user.post('/login', Contoller.login)

module.exports = user;
