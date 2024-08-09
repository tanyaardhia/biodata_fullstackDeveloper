const express = require('express');
const user = require('./user');
const biodata = require('./biodata');
const authentication = require('../middlewares/authentication');
const router = express.Router();

router.use(user)

router.use(authentication)
router.use(biodata)

module.exports = router
